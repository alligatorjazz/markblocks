import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('write', () => {
  it('runs write cmd', async () => {
    const {stdout} = await runCommand('write')
    expect(stdout).to.contain('hello world')
  })

  it('runs write --name oclif', async () => {
    const {stdout} = await runCommand('write --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
