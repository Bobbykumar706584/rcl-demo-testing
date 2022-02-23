In order to customize the styles and theme of these components, best practices of MuiThemeProvider should be used.

https://v3.material-ui.com/customization/themes/

Ignore the error in this example.

```


// this should wrap the root of your MUI components not just a single component...
<MuiThemeProvider>
  <Component prop="🍕" />
</MuiThemeProvider>
```
