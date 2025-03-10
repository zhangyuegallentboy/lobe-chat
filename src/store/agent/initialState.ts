import {AgentState, initialAgentChatState} from './slices/chat/initialState';

export type AgentStoreState = AgentState;

export const initialState: AgentStoreState = {
  ...initialAgentChatState,
};


// Object.defineProperty(VoiceList, 'openaiVoiceOptions', {
//   configurable: false,
//   enumerable: false,
//   value: [
//     {label: '晓晓', value: 'Microsoft Server Speech Text to Speech Voice (zh-CN, XiaoxiaoNeural)'},
//     {label: '晓伊', value: 'Microsoft Server Speech Text to Speech Voice (zh-CN, XiaoyiNeural)'},
//     {label: '云健', value: 'Microsoft Server Speech Text to Speech Voice (zh-CN, YunjianNeural)'},
//     {label: '云希', value: 'Microsoft Server Speech Text to Speech Voice (zh-CN, YunxiNeural)'},
//     {label: '云夏', value: 'Microsoft Server Speech Text to Speech Voice (zh-CN, YunxiaNeural)'},
//     {label: '云扬', value: 'Microsoft Server Speech Text to Speech Voice (zh-CN, YunyangNeural)'},
//     {label: '晓北', value: 'Microsoft Server Speech Text to Speech Voice (zh-CN-liaoning, XiaobeiNeural)'},
//     {label: '晓妮', value: 'Microsoft Server Speech Text to Speech Voice (zh-CN-shaanxi, XiaoniNeural)'},
//     {label: '晓佳', value: 'Microsoft Server Speech Text to Speech Voice (zh-HK, HiuGaaiNeural)'},
//     {label: '晓漫', value: 'Microsoft Server Speech Text to Speech Voice (zh-HK, HiuMaanNeural)'},
//     {label: '温龙', value: 'Microsoft Server Speech Text to Speech Voice (zh-HK, WanLungNeural)'},
//     {label: '小晨', value: 'Microsoft Server Speech Text to Speech Voice (zh-TW, HsiaoChenNeural)'},
//     {label: '韵洁', value: 'Microsoft Server Speech Text to Speech Voice (zh-TW, YunJheNeural)'},
//     {label: '小愉', value: 'Microsoft Server Speech Text to Speech Voice (zh-TW, HsiaoYuNeural)'},
//     {label: 'Ava', value: 'Microsoft Server Speech Text to Speech Voice (en-US, AvaNeural)'},
//     {label: 'Andrew', value: 'Microsoft Server Speech Text to Speech Voice (en-US, AndrewNeural)'},
//     {label: 'Emma', value: 'Microsoft Server Speech Text to Speech Voice (en-US, EmmaNeural)'},
//     {label: 'Brian', value: 'Microsoft Server Speech Text to Speech Voice (en-US, BrianNeural)'},
//     {label: 'Ana', value: 'Microsoft Server Speech Text to Speech Voice (en-US, AnaNeural)'},
//     {
//       label: 'AndrewMultilingual',
//       value: 'Microsoft Server Speech Text to Speech Voice (en-US, AndrewMultilingualNeural)'
//     },
//     {label: 'Aria', value: 'Microsoft Server Speech Text to Speech Voice (en-US, AriaNeural)'},
//     {label: 'AvaMultilingual', value: 'Microsoft Server Speech Text to Speech Voice (en-US, AvaMultilingualNeural)'},
//     {label: 'BrianMultilingual', value: 'Microsoft Server Speech Text to Speech Voice (en-US, BrianMultilingualNeural)'},
//     {label: 'Christopher', value: 'Microsoft Server Speech Text to Speech Voice (en-US, ChristopherNeural)'},
//     {label: 'EmmaMultilingual', value: 'Microsoft Server Speech Text to Speech Voice (en-US, EmmaMultilingualNeural)'},
//     {label: 'Eric', value: 'Microsoft Server Speech Text to Speech Voice (en-US, EricNeural)'},
//     {label: 'Guy', value: 'Microsoft Server Speech Text to Speech Voice (en-US, GuyNeural)'},
//     {label: 'Jenny', value: 'Microsoft Server Speech Text to Speech Voice (en-US, JennyNeural)'},
//     {label: 'Michelle', value: 'Microsoft Server Speech Text to Speech Voice (en-US, MichelleNeural)'},
//     {label: 'Roger', value: 'Microsoft Server Speech Text to Speech Voice (en-US, RogerNeural)'},
//     {label: 'Steffan', value: 'Microsoft Server Speech Text to Speech Voice (en-US, SteffanNeural)'},
//     {label: 'Alonso', value: 'Microsoft Server Speech Text to Speech Voice (es-US, AlonsoNeural)'},
//     {label: 'Paloma', value: 'Microsoft Server Speech Text to Speech Voice (es-US, PalomaNeural)'},
//     {
//       label: 'ko-HyunsuMultilingual',
//       value: 'Microsoft Server Speech Text to Speech Voice (ko-KR, HyunsuMultilingualNeural)'
//     },
//     {label: 'ko-InJoon', value: 'Microsoft Server Speech Text to Speech Voice (ko-KR, InJoonNeural)'},
//     {label: 'ko-SunHi', value: 'Microsoft Server Speech Text to Speech Voice (ko-KR, SunHiNeural)'},
//     {label: 'ja-Keita', value: 'Microsoft Server Speech Text to Speech Voice (ja-JP, KeitaNeural)'},
//     {label: 'ja-Nanami', value: 'Microsoft Server Speech Text to Speech Voice (ja-JP, NanamiNeural)'},
//     {label: 'en-Libby', value: 'Microsoft Server Speech Text to Speech Voice (en-GB, LibbyNeural)'},
//     {label: 'en-Maisie', value: 'Microsoft Server Speech Text to Speech Voice (en-GB, MaisieNeural)'},
//     {label: 'en-Ryan', value: 'Microsoft Server Speech Text to Speech Voice (en-GB, RyanNeural)'},
//     {label: 'en-Sonia', value: 'Microsoft Server Speech Text to Speech Voice (en-GB, SoniaNeural)'},
//     {label: 'en-Thomas', value: 'Microsoft Server Speech Text to Speech Voice (en-GB, ThomasNeural)'},
//     {label: 'cy-Aled', value: 'Microsoft Server Speech Text to Speech Voice (cy-GB, AledNeural)'},
//     {label: 'cy-Nia', value: 'Microsoft Server Speech Text to Speech Voice (cy-GB, NiaNeural)'},
//     {label: 'fr-Vivienne', value: 'Microsoft Server Speech Text to Speech Voice (fr-FR, VivienneMultilingualNeural)'},
//     {label: 'fr-Remy', value: 'Microsoft Server Speech Text to Speech Voice (fr-FR, RemyMultilingualNeural)'},
//     {label: 'fr-Denise', value: 'Microsoft Server Speech Text to Speech Voice (fr-FR, DeniseNeural)'},
//     {label: 'fr-Eloise', value: 'Microsoft Server Speech Text to Speech Voice (fr-FR, EloiseNeural)'},
//     {label: 'fr-Henri', value: 'Microsoft Server Speech Text to Speech Voice (fr-FR, HenriNeural)'},
//     {label: 'ru-Dmitry', value: 'Microsoft Server Speech Text to Speech Voice (ru-RU, DmitryNeural)'},
//     {label: 'ru-Svetlana', value: 'Microsoft Server Speech Text to Speech Voice (ru-RU, SvetlanaNeural)'}
//   ],
//   writable: false
// });
