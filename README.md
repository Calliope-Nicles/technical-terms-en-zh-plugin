<img src="assets/pitaya-icon.png" alt="像素小火龙果图标" width="80" height="80">

# 专业术语英汉对照插件 v2.0.0 · Mac 版

帮助学生和软件开发初学者在完成项目的过程中，逐步熟悉常见的专业英语。现支持 Mac 上的 Codex 和 DeepSeek Harness（DSH）。

## 本版更新

- 新增 DSH 原生接入，与 Codex 使用同一份术语规则。
- 改进同一条回答中的名称一致性：首次写 `Cache（缓存）`，后续统一写 `Cache`，包括长句、段落和复合短语中的重复出现。
- 保留每条回答重新释义、优先遵循用户指定表达方式、代码与原样引用保持不变的行为。

## 下载

- [两端共用的源码 ZIP](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin/releases/download/v2.0.0/technical-terms-en-zh-2.0.0.zip)：推荐给 Codex 用户，也可供 DSH 从文件夹安装。
- [DSH 专用安装包](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin/releases/download/v2.0.0/dsh-plugin-technical-terms-en-zh-2.0.0.tgz)：解压后使用其中的 `package/` 文件夹。
- [SHA-256 校验清单](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin/releases/download/v2.0.0/SHA256SUMS)。

使用发行包无需自行构建，也无需安装 Python。

## Codex 安装

1. 下载源码 ZIP 并解压，保留解压后的文件夹。
2. 在 Finder（访达）中选中文件夹，按 `⌥⌘C` 复制绝对路径。
3. 在 Codex 的 **插件 → 添加 → 添加插件市场** 中填入该路径，添加市场。
4. 选择 **小火龙果** 来源，安装 `technical-terms-en-zh`，核对版本为 `2.0.0`。
5. 打开 **设置 → 钩子**，审阅本包的 SessionStart（会话开始钩子）。确认命令使用 `/bin/cat` 读取安装目录中的 `src/terminology.md`，再点击 **信任**。
6. 新建本地对话，使用下文的问题检查效果。

从旧的本地来源升级时，先卸载旧版，再移除旧市场来源，随后按上述步骤添加新文件夹并安装。更新后重新核对版本及信任状态，保持一个术语插件来源启用。[钩子配置](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin/blob/v2.0.0/hooks/hooks.json) · [Codex 钩子说明](https://learn.chatgpt.com/docs/hooks#review-and-trust-hooks)

## DSH 安装

本版适用于 macOS 的 DSH `0.2.1-rc.3`，安装时会检查平台及宿主版本。

1. 下载任一发行包并解压，找到含 `package.json` 和 `cordis.patch.yml` 的文件夹。专用安装包对应 `package/`；源码 ZIP 对应源码根目录。
2. 在 DSH 侧栏的 **插件** 页点击 **添加插件**，将该文件夹的绝对路径填入 **包名或地址**。
3. 核对包名 `dsh-plugin-technical-terms-en-zh` 和版本 `2.0.0`，确认安装。
4. 点击 **立即启用**，或打开列表中本包的开关；核对详情中有 **1 个组件运行中**。
5. 如提示需要重启，或仍显示旧来源及版本，完全退出并重开 DSH。
6. 新建独立对话，使用下文的问题检查效果。

从文件夹安装时，DSH 会引用该文件夹，请保留其位置与内容。已有候选版的用户可通过同一页面安装新目录并核对来源及版本。停用使用列表开关，卸载使用本包的 **卸载** 按钮；在全新对话中确认规则已撤销。本次受测 DSH 卸载后仍保留目录链接，依赖登记及规则贡献已撤销。

## 确认效果

新建空白对话，发送原问题即可：

> 请用三句话解释缓存的作用、缓存过期的影响，以及更新缓存的时机。每句话都明确提到缓存。只作解释，不读取文件、不调用工具。

同一条回答中，首次应看到 `Cache（缓存）`，后续只写 `Cache`；另发一条追问时重新释义。也可以临时要求“这次只用中文，不标英文术语”，下一条普通提问会恢复默认规则。

本版已在 Mac 上完成 DSH 两项目加载、连续追问、临时表达要求及恢复、代码引用、停用、卸载与归档重装检查，并完成 Codex 共享规则的两轮表达回归。术语选择及措辞仍受模型输出影响，测试结论对应已执行的样例。Windows 和其他 DSH 版本尚未验证。

项目采用 MIT 许可证。安装或使用遇到问题，可在仓库提交反馈。[术语规则](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin/blob/v2.0.0/src/terminology.md) · [DSH 入口](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin/blob/v2.0.0/src/dsh/index.mjs) · [许可证](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin/blob/v2.0.0/LICENSE) · [问题反馈](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin/issues)
