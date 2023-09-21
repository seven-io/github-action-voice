const core = require('@actions/core');
const SevenClient = require('@seven.io/api');
const send = require('./dist/index.js').default;

jest.mock('@actions/core');
jest.mock('@seven.io/api');

test('Log errors', async () => {
    const unauthorizedMessage = '900';

    SevenClient.mockImplementation(() => {
        throw new Error(unauthorizedMessage);
    });

    await send();

    expect(core.error.mock.calls.toString()).toStrictEqual(unauthorizedMessage);
    expect(core.setFailed.mock.calls.toString()).toStrictEqual(unauthorizedMessage);
});

test('Returns API response', async () => {
    const successResponse = '100\n212578\n0.1';

    SevenClient.mockReturnValue({
        voice: () => successResponse,
    });

    expect(await send()).toEqual(successResponse);
});
