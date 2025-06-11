# Neos.WhatsNewDashboard.Editorial
Nodetypes for the Neos CMS for creating content which then can be shown via the corresponding [What's New Dashboard package](https://github.com/sandstorm/Neos.WhatsNewDashboard).

## Integration

### Installation

As long as it is not released:
* add github repo to your repositories:
```json
"repositories": {
    ...
    "neos-whatsnewdashboard-editorial": {
        "type": "vcs",
        "url": "https://github.com/sandstorm/Neos.WhatsNewDashboard.Editorial"
    },
    ...
},
```
* require package
```json
"require": {
    ...,
    "flowpack/neos-whatsnewdashboard-editorial": "@dev",
    ...
}
```

After release:
* install via composer with `composer require flowpack/neos-whatsnewdashboard-editorial`

### Usage
* add `'Flowpack.Neos.WhatsNewDashboard.Editorial:Document.WhatsNewDashboardPage': true` to your root (or another) page > this is the entrypoint for the news
* the url of this page will then be used for the [What's New Dashboard package](https://github.com/sandstorm/Neos.WhatsNewDashboard) to show the news for your project

## Image sizes

We use Sitegeist.Kaleidoscope to define image srcsets. Make sure to define a reasonable value for `sizes` when
using `Image.fusion`. For images rendered in columns there is the `ImageSizes.fusion` helper class available, intended
to make it easier to define the `sizes` attribute for standard layouts.
