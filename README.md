# hexo-reference
[![npm version](https://img.shields.io/npm/v/hexo-plugin-footnote.svg)](https://www.npmjs.com/package/hexo-plugin-footnote) 

A plugin to support markdown footnotes and Wiki-Style tooltip reference in your Hexo blog posts.

## Installation

```
npm install hexo-plugin-footnote --save
```

OR

```
yarn add hexo-plugin-footnote -D
```


If Hexo detect automatically all plugins, that's all.  

If that is not the case, register the plugin in your `_config.yml` file :
```
plugins:
  - hexo-plugin-footnote
```

## Syntax

### Mardown
```
basic footnote[^1]
here is an inline footnote[^2](inline footnote)
footnote with markdown[^3]

[^1]: basic footnote content
[^3]: footnote content with some [markdown](https://en.wikipedia.org/wiki/Markdown)
```

See [Demo](http://blog.xuwei.fun/2017/09/16/japanese01/) here.

### Output
