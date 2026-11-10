<img src="assets/pitaya-icon.png" alt="像素小火龙果图标" width="80" height="80">

# 专业术语英汉对照插件 v2.0.1 · Mac 版

帮助学生和编程初学者边做项目，边学习专业英语。支持 Mac 上的 Codex 和 DeepSeek Harness（DSH）。

## 本版更新

- 修复 DSH 升级到 `0.2.2-rc.1` 后，因旧版精确宿主要求而无法加载本包的问题。
- DSH 宿主要求更新为 `0.2.1-rc.3 || 0.2.2-rc.1`，保留原先已验证版本的支持。
- 术语规则、DSH 加载入口及 Codex 钩子保持原样：同一条回答中首次写 `Cache（缓存）`，后续统一写 `Cache`。

## 下载

- [两端共用的源码 ZIP](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin/releases/download/v2.0.1/technical-terms-en-zh-2.0.1.zip)：供 Codex 安装，也可供 DSH 从文件夹安装。
- [DSH 专用安装包](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin/releases/download/v2.0.1/dsh-plugin-technical-terms-en-zh-2.0.1.tgz)：解压后使用其中的 `package/` 文件夹。
- [SHA-256 校验清单](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin/releases/download/v2.0.1/SHA256SUMS)。

使用发行包无需自行构建，也无需安装 Python。

## DSH 安装与升级

本版适用于 macOS 的 DSH `0.2.1-rc.3` 和 `0.2.2-rc.1`，安装时会检查平台及宿主版本。

1. 在 DSH 侧栏的 **插件** 页点击 **添加插件**，在 **包名或地址** 中填写 `github:Calliope-Nicles/technical-terms-en-zh-plugin#v2.0.1`。也可解压发行包，填写含 `package.json` 和 `cordis.patch.yml` 的文件夹绝对路径。
2. 核对包名 `dsh-plugin-technical-terms-en-zh` 和版本 `2.0.1`，确认安装。
3. 点击 **立即启用**，或打开列表中本包的开关；核对详情中有 **1 个组件运行中**。
4. 如提示需要重启，或仍显示旧来源及版本，完全退出并重开 DSH。
5. 新建空白对话，用下文的问题检查效果。

Mac 默认桌面配置也可使用 DSH 自带的 CLI（命令行工具）升级，再重开 DSH 核对版本和运行状态：

```sh
'/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh' \
  plugin --profile desktop add \
  'github:Calliope-Nicles/technical-terms-en-zh-plugin#v2.0.1' \
  --ignore-scripts
```

从文件夹安装时，请保留该文件夹的位置与内容。停用使用本包的列表开关，卸载使用本包的 **卸载** 按钮；新建对话后检查规则是否撤销。

## Codex 安装

1. 下载源码 ZIP 并解压，保留解压后的文件夹。
2. 在 Finder（访达）中选中文件夹，按 `⌥⌘C` 复制绝对路径。
3. 在 Codex 的 **插件 → 添加 → 添加插件市场** 中填入该路径，添加市场。
4. 选择 **小火龙果** 来源，安装 `technical-terms-en-zh`，核对版本为 `2.0.1`。
5. 打开 **设置 → 钩子**，审阅本包的 SessionStart（会话开始钩子）。确认命令使用 `/bin/cat` 读取安装目录中的 `src/terminology.md`，再点击 **信任**。
6. 新建本地对话，用下文的问题检查效果。

从旧的本地来源升级时，先卸载旧版，再移除旧市场来源，随后按上述步骤添加新文件夹并安装。更新后重新核对版本及信任状态，保持一个术语插件来源启用。[钩子配置](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin/blob/v2.0.1/hooks/hooks.json) · [Codex 钩子说明](https://learn.chatgpt.com/docs/hooks#review-and-trust-hooks)

## 确认效果

新建空白对话，发送原问题即可：

> 请用三句话解释缓存的作用、缓存过期的影响，以及更新缓存的时机。每句话都明确提到缓存。只作解释，不读取文件、不调用工具。

同一条回答中，首次应看到 `Cache（缓存）`，后续只写 `Cache`；另发一条追问时重新释义。也可以临时要求“这次只用中文，不标英文术语”，下一条普通提问会恢复默认规则。

## 验证范围

本次在 Mac DSH `0.2.2-rc.1` 使用应用自带服务检查了归档内容、版本判断、规则加载、停用清理和缺失文件报错，并在独立配置中检查了原生安装。`0.2.1-rc.3` 的版本判断同时通过；此前真实问答验收对应 `v2.0.0`，本次兼容性修订未发送模型请求，也未重做当前 Codex 桌面的安装与问答验收。Windows 和其他 DSH 版本尚未验证。

项目采用 MIT 许可证。安装或使用遇到问题，可在仓库提交反馈。[术语规则](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin/blob/v2.0.1/src/terminology.md) · [DSH 入口](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin/blob/v2.0.1/src/dsh/index.mjs) · [许可证](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin/blob/v2.0.1/LICENSE) · [问题反馈](https://github.com/Calliope-Nicles/technical-terms-en-zh-plugin/issues)
