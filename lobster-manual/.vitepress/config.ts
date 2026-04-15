import { defineConfig } from 'vitepress'

function vitePressBase(): string {
  const raw = process.env.VITEPRESS_BASE?.trim()
  if (!raw || raw === '/') return '/'
  const inner = raw.replace(/^\/+|\/+$/g, '')
  return inner ? `/${inner}/` : '/'
}

export default defineConfig({
  lang: 'zh-CN',
  title: '《龙虾问答手册》V1.0',
  description: '技术小白的 AI 助理入门指南 — Claw Mate 你的数字伙伴',
  base: vitePressBase(),
  srcExclude: [
    'lobster-manual-v1.0-complete.md',
    'lobster-manual-part2-part4-complete.md',
    'lobster-manual-review.md',
    'part2-value/2.1-2.3-complete.md',
  ],
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '关闭搜索',
            noResultsText: '无法找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    sidebar: {
      '/': [
        {
          text: 'Part 0: 前置知识（入门必读）',
          collapsed: false,
          items: [
            { text: '0.1 阅读指南', link: '/part0-intro/0.1-reading-guide' },
            { text: '0.2 核心隐喻', link: '/part0-intro/0.2-core-metaphor' },
            { text: '0.3 交互方式', link: '/part0-intro/0.3-interaction' },
            { text: '0.4 学习节奏', link: '/part0-intro/0.4-learning-rhythm' },
          ],
        },
        {
          text: 'Part 1: 认知篇（什么是龙虾）',
          collapsed: false,
          items: [
            { text: '1.1 龙虾是什么', link: '/part1-cognition/1.1-what-is-lobster' },
            { text: '1.2 为什么叫龙虾', link: '/part1-cognition/1.2-why-lobster' },
            { text: '1.3 和chatgpt/豆包/deepseek等区别', link: '/part1-cognition/1.3-comparison' },
            { text: '1.4 为什么这么火', link: '/part1-cognition/1.4-why-popular' },
            { text: '1.5 有哪些公司在做', link: '/part1-cognition/1.5-companies' },
            { text: '1.6 哪些人在用', link: '/part1-cognition/1.6-users' },
          ],
        },
        {
          text: 'Part 2: 价值篇（能干什么/值不值）',
          collapsed: false,
          items: [
            { text: '2.1 能干什么活', link: '/part2-value/2.1-core-capabilities' },
            { text: '2.2 AI 能自动赚钱吗', link: '/part2-value/2.2-money-making' },
            { text: '2.3 我会失业吗', link: '/part2-value/2.3-job-replacement' },
            { text: '2.4 记忆能力', link: '/part2-value/2.4-memory' },
            { text: '2.5 行业场景', link: '/part2-value/2.5-industry-scenarios' },
            { text: '2.6 成本分析', link: '/part2-value/2.6-cost-analysis' },
          ],
        },
        {
          text: 'Part 3: 信任篇（安全/隐私/焦虑）',
          collapsed: false,
          items: [
            { text: '3.1 隐私安全', link: '/part3-trust/3.1-privacy-security' },
            { text: '3.2 数据安全', link: '/part3-trust/3.2-data-security' },
            { text: '3.3 安全攻击', link: '/part3-trust/3.3-security-attacks' },
            { text: '3.4 滥用担忧', link: '/part3-trust/3.4-abuse-concerns' },
            { text: '3.5 学习焦虑', link: '/part3-trust/3.5-learning-anxiety' },
            { text: '3.6 理解门槛', link: '/part3-trust/3.6-terminology-barrier' },
            { text: '3.7 赚钱怀疑', link: '/part3-trust/3.7-money-skepticism' },
            { text: '3.8 安全范式', link: '/part3-trust/3.8-security-paradigm' },
          ],
        },
        {
          text: 'Part 4: 使用篇（怎么用/怎么部署）',
          collapsed: false,
          items: [
            { text: '4.1 从零开始', link: '/part4-usage/4.1-getting-started' },
            { text: '4.2 硬件要求', link: '/part4-usage/4.2-hardware-requirements' },
            { text: '4.3 部署方案', link: '/part4-usage/4.3-deployment-options' },
            { text: '4.4 上门服务', link: '/part4-usage/4.4-door-to-door-service' },
            { text: '4.5 版本选择', link: '/part4-usage/4.5-version-selection' },
            { text: '4.6 提示词技巧', link: '/part4-usage/4.6-prompt-tips' },
            { text: '4.7 问题反馈', link: '/part4-usage/4.7-problem-feedback' },
            { text: '4.8 学习渠道', link: '/part4-usage/4.8-learning-channels' },
          ],
        },
        {
          text: 'Part 5: 融合篇（多助理/生态）',
          collapsed: false,
          items: [
            { text: '5.1 ClawTeam', link: '/part5-ecosystem/5.1-clawteam' },
            { text: '5.2 Agent OS', link: '/part5-ecosystem/5.2-agent-os' },
            { text: '5.3 龙虾智能体', link: '/part5-ecosystem/5.3-lobster-agents' },
            { text: '5.4 故障排查', link: '/part5-ecosystem/5.4-troubleshooting' },
            { text: '5.5 生态融合未来', link: '/part5-ecosystem/5.5-future' },
          ],
        },
        {
          text: '附录',
          collapsed: false,
          items: [
            { text: 'A. 90 个真实问题索引', link: '/appendix/a-problem-index' },
            { text: 'B. 术语表（说人话版）', link: '/appendix/b-terminology' },
            { text: 'C. 学习路径图（30 天计划）', link: '/appendix/c-learning-path' },
            { text: 'D. 资源链接', link: '/appendix/d-resources' },
          ],
        },
      ],
    },
    outline: {
      label: '本页目录',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '多语言',
  },
})
