/*
 * @Author: qianhua.xiong
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //指定了一组需要被编译（转译）的包的名称列表。
  transpilePackages: [ "antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table" ],
}

module.exports = nextConfig
