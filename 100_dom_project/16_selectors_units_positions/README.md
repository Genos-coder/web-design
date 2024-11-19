### 📏Units In CSS

- Setting 100% width to body removes horizontal scroller.

```
body{
    min-height: 100vh;
    width: 100%;
}
```

- vw is viewport width which get's smaller as you resize browser window to small size.

- Setting min(4rem, 10vw) causes minimum limit set to the font-size of the h2 means 4rem and 10vw which ever between them is minimum is assign to font-size

```
#units h2 {
  text-align: center;
  font-size: min(4rem, 10vw);
  background-image: linear-gradient(to bottom, rgb(251, 251, 251), grey);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-stroke: 1px black;
}
```

- em is relative to rem.

```
#units .dependantunits {
  font-size: 1rem;
  padding: 0.5em;
  background-color: brown;
  color: white;
}
```

- em is relative to it's innermost parent that's why it creates snowball effect

```
#units .levelone_with_em {
  font-size: 2em;
}
#units .leveltwo_with_em {
  font-size: 2em;
}
#units .levelthree_with_em {
  font-size: 2em;
}
```

- Rem is relative to it's outermost parent.

```
#units .levelone_with_rem {
  font-size: 2rem;
}
#units .leveltwo_with_rem {
  font-size: 2rem;
}
#units .levelthree_with_rem {
  font-size: 2rem;
}

```
