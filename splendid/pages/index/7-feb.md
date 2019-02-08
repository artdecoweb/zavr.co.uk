## 7 February

Today I've started to fill up the *depack* scope with packages on NPM by transferring existing work into it. The first two packages are `@depack/router` and `@depack/form` that were taken from the `knedv.ru` website. The router is the adaptation of the `preact-router` that was modified to work with _Depack_. The reason it wasn't working was because some properties were assigned on string nodes which threw an error, and also because ``__preactattr_`` was referenced without using quotes and got mangled by the Closure Compiler.

<Code src="example/2019/2-feb/strings.jsx"/>

```js
// Transpiled into
// ...
                // ↓ the string that results in error
render(h(Router,{},`
  `,h(Component,{path:"/"}),`
`), document.body)
```

<img src="img/2019/2-feb/error.jpg" alt="Error in preact-router">

<p>
I also made the demo preview of the `@depack/router` using _Splendid_ and had to update _Splendid_ to insert files manually with the `<File>` tag for the purpose of adding the source map to the website JavaScript bundle made with _Depack_. It will also now show an error if a page does not exist, and produce better JSX code highlighting with Prism, since highlightjs does not work with JSX.
</p>

<p style="padding:0.5rem; background: lightgrey; display:inline-block; border-radius:0.5rem;">
<img src="img/2019/2-feb/appshot-Safari.gif" alt="Demo for @depack/router"><br>
View the demo at [https://dpck.github.io/router/](https://dpck.github.io/router/)
</p>

<p>
Finally, in the spirit of starting to breath life into existing scopes and domains rather than creating new ones, I decided to use my existing `zavr.co.uk` domain to blog about work to keep track of the things that I've done. I had already done so on the [daily-log](https://github.com/artdecocode/daily-log) which was a GitHub blog compiled with _Documentary_, however I thought it would be a good use-case for _Splendid_ to compile a blog website, so that new features could emerge.
</p>

<p>
Unfortunately, the `depack` GitHub organisation was taken since summer which is a bummer because it's when I first thought of _Depack_ and I think I could have registered the org back then. The person has only registered to open a single issue, but nevermind I got the `dpck` org which is also acceptable and is cool in a way. It will specialise on publishing packages that can be safely compiled with _Depack_ for front-end, since a lot of existing widgets and libraries will most likely require some adjustments to do that. The next package in the queue is `@depack/from` which is a bootstrap form that was quickly written by me earlier last week. It needs a better model where the root `Form` component would hold the values of all fields to be able to handle which components need re-rendering better. There are also tests to be written for front-end which is a new important chapter in *Art Deco* software development: _Zoroaster_ will need to be modified to have a persistent context (to keep the browser open between tests), and strategies for communicating with browsers to run test suites will also need to be derived, since we're not going to use _Karma_ and its adapters.
</p>

### ToDo
<ul>
 * Setup the front-end testing infrastructure by allowing _Zoroaster_ tests to have persistent context.
 * Update the structure in _Splendid_ to have components directory with the new AjaxMenu, don't override package.json if it exists, rework example pages.
</ul>
