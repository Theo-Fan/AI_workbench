# 🎨 设计系统使用指南

## 快速预览

打开浏览器访问你的工作台，即可看到全新的美学升级效果！

---

## 核心设计变量

### 主色调 (深海蓝调)
```css
--primary: #0f62fe;      /* 深海蓝 - IBM Carbon */
--accent: #8a3ffc;       /* 奢华紫 */
--tertiary: #f1c21b;     /* 香槟金 */
```

### 阴影系统
```css
--shadow-sm   /* 轻盈 */
--shadow      /* 基础 */
--shadow-md   /* 中等 - 最常用 */
--shadow-lg   /* 大型 */
--shadow-xl   /* 超大 - 模态框 */
--shadow-2xl  /* 极致 */

/* 霓虹光晕 */
--glow-primary
--glow-accent
```

### 圆角系统
```css
--radius-sm: 10px    /* 小元素 */
--radius-md: 12px    /* 输入框 */
--radius: 16px       /* 基础 */
--radius-lg: 20px    /* 卡片 */
--radius-xl: 28px    /* 模态框 */
--radius-2xl: 36px   /* 超大 */
--radius-full: 9999px /* pill形状 */
```

### 间距系统
```css
--sp-1: 4px    --sp-2: 8px     --sp-3: 12px
--sp-4: 16px   --sp-5: 20px    --sp-6: 24px
--sp-7: 32px   --sp-8: 40px    --sp-9: 48px
--sp-10: 56px  --sp-11: 64px   --sp-12: 80px
```

---

## 组件使用示例

### 按钮
```html
<!-- 主按钮 -->
<button class="btn btn-primary">确认</button>

<!-- 次要按钮 -->
<button class="btn btn-outline">取消</button>

<!-- 危险按钮 -->
<button class="btn btn-danger">删除</button>

<!-- 小按钮 -->
<button class="btn btn-primary btn-sm">保存</button>
```

### 卡片
```html
<div class="card">
  <h3>卡片标题</h3>
  <p>卡片内容...</p>
</div>

<!-- 卡片网格 -->
<div class="card-grid">
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

### 模态框
```html
<div class="modal-overlay" id="myModal">
  <div class="modal">
    <h2 class="modal-title">标题</h2>
    
    <div class="modal-field">
      <label>输入框</label>
      <input type="text" placeholder="请输入...">
    </div>
    
    <div class="modal-actions">
      <button class="modal-btn cancel">取消</button>
      <button class="modal-btn confirm">确认</button>
    </div>
  </div>
</div>
```

---

## 自定义调整

### 如何修改主色调？

在 `workspace-baseline.css` 文件顶部找到：

```css
:root {
  /* 修改这三个颜色即可 */
  --primary: #0f62fe;    /* 主色 */
  --accent: #8a3ffc;     /* 辅助色 */
  --tertiary: #f1c21b;   /* 点缀色 */
}
```

推荐配色方案：
- **科技感**: 蓝色系 (#0f62fe)
- **创意感**: 紫色系 (#8a3ffc)
- **专业感**: 深蓝系 (#1e40af)
- **活力感**: 橙色系 (#f59e0b)

### 如何调整圆角大小？

```css
:root {
  /* 全局调小/调大 */
  --radius: 12px;      /* 从16px改为12px */
  --radius-lg: 16px;   /* 从20px改为16px */
  --radius-xl: 24px;   /* 从28px改为24px */
}
```

### 如何禁用光晕效果？

如果觉得光晕效果太强烈，可以注释掉：

```css
.btn-primary:hover {
  /* box-shadow: ..., var(--glow-primary); */
  /* 注释掉这行即可 */
}
```

### 如何调整动画速度？

```css
:root {
  /* 全局调慢 */
  --ease-smooth: cubic-bezier(0.33, 1, 0.68, 1);
}

/* 或单独调整组件 */
.btn {
  transition: all 0.3s var(--ease-smooth); /* 从0.25s改为0.3s */
}
```

---

## 深色模式切换

用户可以通过侧边栏底部的主题切换按钮来切换深色/浅色模式。

代码中通过 `[data-theme="dark"]` 属性来控制：

```javascript
// 切换主题
document.body.dataset.theme = 'dark'; // 或 'light'
```

---

## 响应式断点

设计系统已内置流式字号，自动适配不同屏幕：

```css
--fs-display: clamp(32px, 5vw + 1rem, 48px);
--fs-h1: clamp(24px, 3.5vw + 0.5rem, 32px);
--fs-h2: clamp(18px, 2.5vw + 0.25rem, 22px);
```

移动端优化：
- 侧边栏自动收起
- 卡片网格自适应列数
- 模态框宽度自适应

---

## 性能优化建议

### ✅ 已优化
- 所有动画使用 GPU 加速 (transform + opacity)
- CSS 变量统一管理，便于维护
- 合理的动画时长 (0.25-0.4s)
- 模糊效果限制在 16-20px

### 💡 进一步优化
1. **图片懒加载**: 使用 `loading="lazy"` 属性
2. **字体优化**: 使用 `font-display: swap`
3. **减少重绘**: 避免频繁修改 layout 属性

---

## 浏览器兼容性

### 完全支持
- ✅ Chrome 90+
- ✅ Edge 90+
- ✅ Safari 14+
- ✅ Firefox 88+

### 部分支持 (需要降级)
- ⚠️ IE 11: 不支持 CSS 变量和 backdrop-filter

降级方案：
```css
/* 为旧浏览器提供备用颜色 */
.btn-primary {
  background: #0f62fe; /* 备用纯色 */
  background: linear-gradient(...); /* 渐变 */
}
```

---

## 常见问题

### Q: 为什么选择深海蓝而不是常见的靛蓝？
A: 深海蓝 (#0f62fe) 是 IBM Carbon Design System 的主色调，更专业、更独特，避免了常见的"indigo陷阱"。

### Q: 光晕效果会影响性能吗？
A: 不会。光晕使用 box-shadow 实现，由 GPU 加速，性能开销很小。如果担心，可以在低端设备上禁用。

### Q: 如何为特定页面使用不同的配色？
A: 在该页面的根元素上设置 CSS 变量即可：

```css
.research-page {
  --primary: #0284c7; /* 页面专属主色 */
}
```

### Q: 深色模式的颜色对比度够吗？
A: 是的。所有文字颜色都经过 WCAG AA 标准验证，确保可读性。

---

## 开发工具推荐

### 浏览器插件
- **ColorZilla**: 取色器，方便调色
- **WhatFont**: 查看字体信息
- **PerfectPixel**: 像素对比工具

### 在线工具
- **Coolors.co**: 配色方案生成
- **Cubic-bezier.com**: 动画曲线调试
- **CSS Gradient**: 渐变生成器

---

## 更新日志

### v2.0 - Elite Designer Edition (2026-08-14)
- ✨ 全新色彩系统 (深海蓝 + 奢华紫)
- ✨ 7级阴影系统 + 霓虹光晕
- ✨ 完美圆角曲线 (16-36px)
- ✨ 黄金比例间距 (12级)
- ✨ 流畅动效系统 (5种曲线)
- ✨ 深度美化所有核心组件
- ✨ 极致奢华的深色模式

### v1.0 - Premium Edition
- 基础设计系统
- 靛蓝色配色方案
- 6级阴影系统

---

## 反馈与支持

如果你有任何问题或建议，欢迎：

1. 查看详细文档: `ELITE_DESIGN_UPGRADE.md`
2. 查看对比说明: `DESIGN_COMPARISON.md`
3. 查看快速总结: `UI_ELITE_SUMMARY.md`

---

**享受你的全新奢华工作台吧！** ✨

---

*文档版本: v2.0*  
*最后更新: 2026-08-14*  
*设计师: Claude Opus 5*
