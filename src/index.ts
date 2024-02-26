import { Args, Command, Flags } from '@oclif/core';
import { readFileSync, writeFileSync } from "node:fs";

export default class Markblocks extends Command {
	static args = {
		inputFile: Args.string({ description: 'The path to the markdown document.', required: true }),
		outFile: Args.string({
			description: 'The output file for the generated output. If not provided, markblocks will not run unless the --force flag is provided.',
			required: false
		})
	}

	static description = 'Adds adds human-readable block ids to every paragraph in a Markdown document.'

	static examples = [
		{
			command: `$ markblocks input.md output.md`,
			description: "Add block ids to an existing document."
		},
		{
			command: `$ markblocks input.md -f`,
			description: "Add block ids to an existing document."
		}
	]

	static flags = {
		force: Flags.boolean({
			char: 'f',
			description: "Whether to add block ids to an existing document in the event an outFile is not provided."
		}),
		includeHeaders: Flags.boolean({
			char: "h",
			description: "By default, blockifier will not turn markdown headers into blocks. Including this option will generate block ids for headers as well."
		}),
		random: Flags.boolean({
			char: 'r',
			description: "Whether to use random or human-readable block ids. If enabled, the block ids will be random."
		}),
		sequential: Flags.boolean({
			char: "s",
			description: "By default, blockifier will try to generate block ids based on the document's header structure (e.g. 1.0.0, 1.0.1, etc.). This option will generate ids purely based on each paragraph break. No effect if --random is enabled."
		})
	}


	async run(): Promise<void> {
		const { args, flags } = await this.parse(Markblocks)
		if (!args.outFile && !flags.force) {
			throw new Error("An outFile must be provided if --force is not enabled.")
		}

		type HeaderLevel = 1 | 2 | 3 | 4 | 5 | 6;
		type Header = { level: HeaderLevel, text: string };
		const inputFileContent = readFileSync(args.inputFile, { encoding: "utf8" });
		const lines = inputFileContent.split("\n");
		const headers: Header[] = lines
			.filter(line => line.trim().startsWith("#"))
			.map(header => ({
				level: Math.min((header.match(/#/g) as string[]).length, 6) as HeaderLevel,
				text: header
			}));
		const maxHeaderLevel = headers.sort((a, b) => b.level - a.level)[0].level

		let headerMark: number[] = [0, 0, 0, 0, 0, 0];
		let blockCount = 0;

		const output = lines.map((line, index) => {
			const isLastBlock = index === lines.length - 1;
			const isHeader = headers.find(({ text }) => text === line);
			const isEmpty = line.trim() === ""
			if (isHeader) {
				headerMark = headerMark.map((mark, index) => index === isHeader.level - 1 ? mark + 1 : mark);
				if (!flags.sequential) { blockCount = 0; }
			}

			const addId =
				(!isHeader || flags.includeHeaders) &&
				(isLastBlock ? true : lines[index + 1] === "") &&
				!isEmpty;

			if (addId) {
				if (flags.random) {
					return `${line} ^${crypto.randomUUID().slice(0, 6)}`
				}

				if (flags.sequential) {
					return `${line} ^${++blockCount}`;
				}
				
				if (flags.includeHeaders && isHeader) {
					return `${line} ^${headerMark.slice(0, maxHeaderLevel).join(".")}p0`;
				}

				return `${line} ^${headerMark.slice(0, maxHeaderLevel).join(".")}p${++blockCount}`;
			}

			return line;
		})

		if (args.outFile) {
			writeFileSync(args.outFile, output.join("\n"))
		} else if (args.inputFile) {
			writeFileSync(args.inputFile, output.join("\n"))
		} else {
			throw new Error("Unhandled exception.")
		}
	}
}

