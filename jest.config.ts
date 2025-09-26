import type { Config } from 'jest';

const config: Config = {
	transform: { '^.+\\.ts$': 'ts-jest' },
    moduleDirectories: ['node_modules', 'src'],
};

export default config;
