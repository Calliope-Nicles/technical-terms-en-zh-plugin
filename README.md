<img src="assets/pitaya-icon.png" alt="像素小火龙果图标" width="80" height="80">

# 专业英语术语伴学

**Technical English Companion · Mac v2.0.2**

在 Codex 或 DeepSeek Harness（DSH）里讨论软件开发时，中文回答首次提到关键术语会附上英文名称和简短释义，同一条回答再次提到时沿用英文。此正式版面向中文对话，适用于 macOS。

## 下载

- [Codex 安装包（ZIP）](https://github.com/Calliope-Nicles/technical-english-companion/releases/download/v2.0.2/technical-english-companion-2.0.2.zip)
- [DSH 安装包（TGZ）](https://github.com/Calliope-Nicles/technical-english-companion/releases/download/v2.0.2/dsh-plugin-technical-english-companion-2.0.2.tgz)
- [SHA-256 校验清单](https://github.com/Calliope-Nicles/technical-english-companion/releases/download/v2.0.2/SHA256SUMS)

## 安装或从旧版切换

**Codex**：解压 ZIP，在「插件 → 添加 → 添加插件市场」选择解压后包含 `.agents/plugins/marketplace.json` 的文件夹。选择 **Technical English Companion** 来源中的同名插件，核对标识 `technical-english-companion@technical-english-companion-public` 和版本 `2.0.2`。在「设置 → 钩子」审阅并信任 `SessionStart`，它通过 `/bin/cat` 读取包内的 `src/terminology.md`。新建对话后即可使用。

**DSH**：适用于 Mac 版 `0.2.1-rc.3` 和 `0.2.2-rc.1`。在「插件 → 添加插件」输入 `github:Calliope-Nicles/technical-english-companion#v2.0.2`，或下载上面的 TGZ 并通过宿主安装。确认包名 `dsh-plugin-technical-english-companion`、版本 `2.0.2`，启用后按宿主提示重启并新建对话。

从更早版本迁移时，宿主会把新标识识别为另一个插件。先停用此前安装的版本，再启用新版本，以免同一条规则载入两次。卸载时在各自宿主中选择对应来源和包名。

## 使用示例

问「缓存有什么作用，什么时候应该更新？」时，第一次提到会写 `Cache（缓存）`，同条后续写 `Cache`。新的一条回答首次出现时会再次附上释义。用户明确指定的表达方式优先。

[术语规则](https://github.com/Calliope-Nicles/technical-english-companion/blob/v2.0.2/src/terminology.md) · [报告问题](https://github.com/Calliope-Nicles/technical-english-companion/issues) · [MIT 许可证](https://github.com/Calliope-Nicles/technical-english-companion/blob/v2.0.2/LICENSE)
