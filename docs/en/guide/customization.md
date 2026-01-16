# Customization {#customization}

Vue Late Window Manager provides default style for the windows. You can customize the default style if you don't like the default style.

## CSS Variables {#css-variables}

You can customize the default style by overriding css variables.

::: code-group

```css [Default colors (Light)]
.late-window {
  /** Primary color */
  --dream-primary-color: #ff1493;
  --dream-primary-color-hover: #ff69b4;
  --dream-primary-color-active: #ff1493;
  --dream-primary-border-color: #ff14936c;
  --dream-primary-outline-color: #ff149333;

  /** Secondary color */
  --dream-secondary-color: #faafd5;
  --dream-secondary-color-hover: #f87cba;
  --dream-secondary-color-active: #faafd5;
  --dream-secondary-border-color: #faafd56c;
  --dream-secondary-outline-color: #faafd533;

  /** Background color */
  --dream-background-color: #f5f5f5;
  --dream-background-color-muted: #e5e5e5;

  /** Text color */
  --dream-text-color: #fff;
  --dream-text-color-hover: #fff;
  --dream-text-color-active: #fff;
  --dream-text-color-reverse: #233;
  --dream-text-color-muted: #788;

  /** Other colors */
  --dream-error-color: #ff1024;
  --dream-warn-color: #ffc414;
  --dream-info-color: #12cfff;
}
```

```css [Default colors (Dark)]
@media (prefers-color-scheme: dark) {
  .late-window {
    /** Text color */
    --dream-text-color: #fff;
    --dream-text-color-hover: #fff;
    --dream-text-color-active: #fff;
    --dream-text-color-muted: #fff7;

    /** Background color */
    --dream-background-color: #233;
    --dream-background-color-muted: #344;
  }
}
```

:::

## Write your own style {#write-your-own-style}

You also can write your own style throw stylesheet. For example:

```scss [custom.scss]
/**
 * Custom style for example
 * Design by LateDream
 */
.late-window {
  position: fixed;
  flex-direction: column;

  & > * {
    width: 100%;
  }

  .title-bar {
    color: grey;
    background-color: #49413b;
    display: inline-flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px 10px 0 0;

    .title {
      display: inline-flex;
      user-select: none;
      margin-right: 6px;
      font-size: 12px;
    }
    .controls {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;

      .dream-button.icon {
        border: 0;
        background-color: transparent;
        width: 24px;
        height: 24px;
        svg {
          display: none; // hide default icon
        }

        // custom icon
        // maximize button and base
        &::before {
          content: "";
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #fac800;
        }

        // minimize button
        &::first-child::before {
          background-color: #35c759;
        }

        // close button
        &.danger::before {
          background-color: #ff5c60;
        }
      }
    }
  }
  .workspace {
    flex: 1;
    color: #fff;
    background-color: #233333;
    border-top: 1px #0008 solid;
    border-radius: 0 0 10px 10px;
  }

  &.focused .title-bar {
    color: #fffaf0;
    background-color: #222521;
    .title {
      font-weight: bold;
    }
  }
}
```

And it will be rendered as follows:

<iframe title="Customized Example" src="/vue-late-window-manager/other/customization" width="100%" height="400px" style="border: 1px solid #ccc;border-radius: 6px;"></iframe>
