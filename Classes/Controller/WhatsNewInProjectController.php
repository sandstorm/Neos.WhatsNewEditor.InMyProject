<?php
namespace Flowpack\Neos\WhatsNewDashboard\Editorial\Controller;

use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\ContentRepository\Domain\Service\ContextFactoryInterface;
use Neos\Eel\FlowQuery\FlowQuery;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Neos\Domain\Service\ContentContext;

/**
 * @Flow\Scope("singleton")
 */
class WhatsNewInProjectController extends ActionController
{
    #[Flow\Inject]
    protected ContextFactoryInterface $contextFactory;

    /**
     * @return string
     */
    public function indexAction()
    {
        $rootNode = $this->getSiteNode();
        $flowQuery = new FlowQuery([$rootNode]);
        $node = $flowQuery->find('[instanceof Flowpack.Neos.WhatsNewDashboard.Editorial:Document.WhatsNewDashboardPage]')->get(0);
        $clientNotificationDateTime = $node->getProperty('clientNotificationDateTime');

        return json_encode([
            "clientNotificationTimestamp" => $clientNotificationDateTime->getTimestamp() * 1000 // to get timestamp in ms instead of seconds to match js timestamp
        ]);
    }

    /**
     * @return NodeInterface
     */
    private function getSiteNode(): NodeInterface
    {
        /** @var ContentContext $context */
        $context = $this->contextFactory->create([
            'workspaceName' => 'live',
            'invisibleContentShown' => true,
            'dimensions' => [
            ],
            'targetDimensions' => [
            ]

        ]);
        return $context->getCurrentSiteNode();
    }
}
