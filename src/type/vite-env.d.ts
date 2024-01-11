/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2024-01-11 11:21:21
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2024-01-11 11:21:47
 * @FilePath: \vite_vue\src\type\vite-env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 配置环境变量的声明，方便使用vite的环境变量时得到代码提示
 * 对应.env或.env.x文件中定义的属性名，注意vite要求自定义属性的前缀必须为VITE_xxxx
 */
interface ImportMetaEnv {
  /** 应用标题 */
  VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}