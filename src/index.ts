import {debug, error, getInput, setFailed, setOutput} from '@actions/core';
import Sms77Client, {VoiceParams} from 'sms77-client';
import fetch from 'node-fetch';
import {ok} from 'assert';

(global as any).fetch = fetch;

type Type = Pick<VoiceParams, 'from' | 'text' | 'to'>;

const voiceParams: Type = {
    from: undefined,
    text: '',
    to: '',
};

const send = async () => {
    (<(keyof Type)[]>Object.keys(voiceParams))
        .forEach(k => (<Type[typeof k]>voiceParams[k]) = getInput(k));

    debug('Sending Voice');

    try {
        const apiKey = getInput('apiKey') || process.env.SMS77_API_KEY;
        ok(apiKey);

        const response = await (new Sms77Client(apiKey, 'github-action-voice'))
            .voice(voiceParams) as string;
        debug('API reached, Voice dispatch ended.');
        setOutput('API response', response);

        return response;
    } catch (e) {
        error(e.message);
        setFailed(e.message);
    }
};

export default send;

send();