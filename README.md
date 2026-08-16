# dsh-molecule-viewer

DSH（DeepSeek Harness）分子结构查看器插件：传入分子文件路径或 PDB/SDF/MOL2/MOL 格式数据，在会话界面渲染**交互式 3D 分子查看器**（3Dmol.js，支持旋转/缩放/样式切换/着色）。

## 特性

- 🧬 **四种格式**：PDB（蛋白质/大分子）、SDF、MOL2、MOL
- 📁 **路径优先**：直接传文件路径，工具在服务端读取——Windows（`D:\dir\x.pdb`）、WSL（`/mnt/d/dir/x.pdb`）和 `~/` 写法都能自动识别互转
- 🖱️ **交互式查看器**：旋转、缩放，实时切换 cartoon / stick / line / sphere 样式、背景色与分子着色
- ⚡ **轻量解析**：Host 侧只做原子计数与校验，真正的解析渲染交给浏览器端 3Dmol.js
- 📦 **本地打包 3Dmol.js**：`vendor/3Dmol-min.cjs`（2.4.2）在构建时打进 client bundle —— 无 CDN 运行时请求，加载快、可离线、不受浏览器跟踪防护影响

## 安装

```bash
dsh plugin --profile web add git+https://github.com/PandaAIDD/dsh-molecule-viewer.git
```

重启生效：

```bash
dsh --profile web
```

安装后 `view_molecule` 工具自动可用，模型按工具描述自动调用。

> `dsh plugin` 是 pnpm 转发器：克隆仓库 → 安装到 profile 的 `node_modules` → 检测到 `dsh.bundle.patch` 声明 → 自动加入 `dsh.profile.bundles`。peerDependencies 从 profile 的 healed `node_modules` 解析。

## 使用

对话中直接描述需求即可，模型会自动调用工具：

> "帮我可视化这个分子：D:\project\Dock\data\3IPQ.pdb"

或明确要求：

> "用 view_molecule 工具查看这段 SDF 数据：..."

### 支持的格式

| 格式 | 扩展名 | 说明 |
|---|---|---|
| PDB | `.pdb` `.ent` | 蛋白质/大分子（ATOM/HETATM 记录） |
| SDF | `.sdf` `.sd` | 多分子结构（V2000/V3000） |
| MOL2 | `.mol2` | TRIPOS 格式 |
| MOL | `.mol` | MDL MOL（V2000/V3000） |

> SMILES 暂不支持——需要含 3D 坐标的格式。

### 工具参数

| 参数 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `path` | `string` | 与 `data` 二选一（**优先**） | 分子文件路径，按用户原始写法传入即可（Windows/WSL 双向兼容，`~/` 自动展开）；服务端直接读取，速度快 |
| `data` | `string` | 与 `path` 二选一 | 分子文件纯文本内容——仅用于磁盘上没有文件的情况（如聊天中粘贴的内容），不要 base64 编码 |
| `format` | `pdb \| sdf \| mol2 \| mol` | 传 `data` 时必填 | 输入格式；传 `path` 时按扩展名自动推断，可省略 |
| `name` | `string` | 否 | 显示名称（如 "1CRN"），作为查看器标题 |
| `style` | `stick \| line \| sphere \| cartoon` | 否 | 初始渲染样式（默认 `stick`；蛋白质建议 `cartoon`） |

## 开发

```bash
# 安装依赖（或复用 DSH profile 的 node_modules）
pnpm install

# 构建（产物提交到 GitHub，用户安装时无需构建）
pnpm run build

# 类型检查
pnpm run typecheck
```

### 项目结构

```
dsh-molecule-viewer/
├── package.json          # 声明 dsh.bundle + dsh.client
├── cordis.patch.yml      # bundle 补丁：按包名插入插件行
├── tsconfig.json
├── src/
│   ├── index.ts          # Host 半：注册 view_molecule 工具（path/data 双入口）
│   ├── parser.ts         # 轻量解析器（原子计数 + 验证）
│   ├── types.ts          # 共享类型 + SessionEventMap 声明合并
│   ├── invariant.ts      # 包不变式 companion
│   └── client/
│       ├── index.ts      # Client 半：Conversation Node + slot renderer
│       ├── MoleculeView.tsx    # 3Dmol.js 交互式 3D 容器
│       ├── molecule-definition.ts  # 事件匹配定义
│       └── threeDmol.ts  # 3Dmol.js 本地打包加载（vendor，无 CDN）
├── vendor/                # 本地打包的 3Dmol.js 2.4.2（.cjs — UMD 构建）
├── lib/                  # 构建产物（提交到仓库）
└── README.md
```

### 架构

```
模型调用 view_molecule(path 或 data)
    ↓
Host 半（Node.js）: 读取/接收分子 → 解析计数 → 发出 molecule/view 事件 → 返回 JSON
    ↓
Client 半（浏览器）: 捕获事件 → 3Dmol.js 渲染交互式 3D 视图
```

## License

MIT
