# Neos.WhatsNewEditor.InMyProject
Nodetypes for the Neos CMS for creating content which then can be shown via the corresponding [What's New Dashboard package](https://github.com/sandstorm/Neos.WhatsNewDashboard).

## Integration

### Installation

As long as it is not published on packagist:
* add github repo to your repositories in your `composer.json`:
```json
"repositories": {
    ...
    "neos-whatsneweditor-inmyproject": {
        "type": "vcs",
        "url": "https://github.com/sandstorm/Neos.WhatsNewEditor.InMyProject"
    },
    ...
},
```
* require package in your `composer.json`:
```json
"require": {
    ...,
    "flowpack/neos-whatsneweditor-inmyproject": "@dev",
    ...
}
```

After publishing on packagist:
* install via composer with `composer require flowpack/neos-whatsneweditor-inmyproject`

### Usage
* add `'Flowpack.Neos.WhatsNewEditor.InMyProject:Document.WhatsNewDashboardPage': true` to your root (or another) page > this is the entrypoint for the news
* the url of this page will then be used for the [What's New Dashboard package](https://github.com/sandstorm/Neos.WhatsNewDashboard) to show the news for your project

## Image sizes

We use Sitegeist.Kaleidoscope to define image srcsets. Make sure to define a reasonable value for `sizes` when
using `Image.fusion`. For images rendered in columns there is the `ImageSizes.fusion` helper class available, intended
to make it easier to define the `sizes` attribute for standard layouts.
