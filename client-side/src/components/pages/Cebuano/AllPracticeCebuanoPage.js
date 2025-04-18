import React from 'react';
import EasyVocabularyChallengeCebuano from '../../Dialects/Cebuano/Practice Cebuano/Vocabulary Challenges/EasyVocabularyChallengeCebuano';
import EasyPronunciationChallengeCebuano from '../../Dialects/Cebuano/Practice Cebuano/Pronunciation Challenges/EasyPronunciationChallengeCebuano';
import EasySentenceChallengeCebuano from '../../Dialects/Cebuano/Practice Cebuano/Sentence Challenges/EasySentenceChallengeCebuano';
import EasyPhraseChallengeCebuano from '../../Dialects/Cebuano/Practice Cebuano/Phrase Challenges/EasyPhraseChallengeCebuano';
import EasyTranslationChallengeCebuano from '../../Dialects/Cebuano/Practice Cebuano/Translation Challenges/EasyTranslationChallengeCebuano';
import useScreenSize from '../Screen Size Hook/useScreenSize';

export function CebuanoVocabularyEasyPage() {
    console.log("TagalogVocabularyEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <EasyVocabularyChallengeCebuano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function CebuanoPronunciationEasyPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <EasyPronunciationChallengeCebuano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function CebuanoSentenceEasyPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <EasySentenceChallengeCebuano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function CebuanoPhraseEasyPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <EasyPhraseChallengeCebuano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function CebuanoTranslationEasyPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <EasyTranslationChallengeCebuano screenSize={screenSize === 'small'}/>
        </>
    );
}