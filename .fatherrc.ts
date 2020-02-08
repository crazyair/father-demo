import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  // cjs: 'rollup',
  esm: 'rollup',
  runtimeHelpers: true,
  extraBabelPlugins: [
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  doc: { typescript: true } as any,
};

export default options;
