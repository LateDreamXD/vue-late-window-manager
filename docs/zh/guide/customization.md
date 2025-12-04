# 自定义 {#customization}

Vue Late Window Manager 提供了默认的窗口样式。若您不满意默认样式，您可以自定义以满足您的需求。

## CSS 变量 {#css-variables}

您可以通过覆盖 css 变量来自定义默认样式。

::: code-group

```css [默认颜色 (亮)]
:root {
  /** 主要颜色 */
  --dream-primary-color: #ff1493;
  --dream-primary-color-hover: #ff69b4;
  --dream-primary-color-active: #ff1493;
  --dream-primary-border-color: #ff14936c;
  --dream-primary-outline-color: #ff149333;

  /** 次要颜色 */
  --dream-secondary-color: #faafd5;
  --dream-secondary-color-hover: #f87cba;
  --dream-secondary-color-active: #faafd5;
  --dream-secondary-border-color: #faafd56c;
  --dream-secondary-outline-color: #faafd533;

  /** 背景颜色 */
  --dream-background-color: #f5f5f5;
  --dream-background-color-muted: #e5e5e5;

  /** 文本颜色 */
  --dream-text-color: #fff;
  --dream-text-color-hover: #fff;
  --dream-text-color-active: #fff;
  --dream-text-color-reverse: #233;
  --dream-text-color-muted: #788;

  /** 其他颜色 */
  --dream-error-color: #ff1024;
  --dream-warn-color: #ffc414;
  --dream-info-color: #12cfff;
}
```

```css [默认颜色 (暗)]
@media (prefers-color-scheme: dark) {
  :root {
    /** 文本颜色 */
    --dream-text-color: #fff;
    --dream-text-color-hover: #fff;
    --dream-text-color-active: #fff;
    --dream-text-color-muted: #fff7;

    /** 背景颜色 */
    --dream-background-color: #233;
    --dream-background-color-muted: #344;
  }
}
```

:::

## 自定义样式 {#write-your-own-style}

您也可以通过编写自己的样式表来自定义样式。例如：

```scss [SCSS]
/**
 * 自定义样式示例
 * 由晚梦设计
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
          display: none; // 隐藏默认图标
        }

        // 自定义图标
        // 最大化按钮和基础
        &::before {
          content: "";
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #fac800;
        }

        // 最小化按钮
        &::first-child::before {
          background-color: #35c759;
        }

        // 关闭按钮
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

它将像这样渲染：

<iframe title="Customized Example" src="/vue-late-window-manager/other/customization" width="100%" height="400px" style="border: 1px solid #ccc;border-radius: 6px;"></iframe>
