import React from 'react';
import EasyVocabularyChallengeIlocano from '../../Dialects/Ilocano/Practice Ilocano/Vocabulary Challenges/EasyVocabularyChallengeIlocano';
import EasyPhraseChallengeIlocano from '../../Dialects/Ilocano/Practice Ilocano/Phrase Challenges/EasyPhraseChallengeIlocano';
import EasySentenceChallengeIlocano from '../../Dialects/Ilocano/Practice Ilocano/Sentence Challenges/EasySentenceChallengeIlocano';
import EasyPronunciationChallengeIlocano from '../../Dialects/Ilocano/Practice Ilocano/Pronunciation Challenges/EasyPronunciationChallengeIlocano';
import EasyTranslationChallengeIlocano from '../../Dialects/Ilocano/Practice Ilocano/Translation Challenges/EasyTranslationChallengeIlocano';
import useScreenSize from '../Screen Size Hook/useScreenSize';

export function IlocanoVocabularyEasyPage() {
    console.log("TagalogVocabularyEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <EasyVocabularyChallengeIlocano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function IlocanoPronunciationEasyPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <EasyPronunciationChallengeIlocano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function IlocanoSentenceEasyPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <EasySentenceChallengeIlocano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function IlocanoPhraseEasyPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <EasyPhraseChallengeIlocano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function IlocanoTranslationEasyPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <EasyTranslationChallengeIlocano screenSize={screenSize === 'small'}/>
        </>
    );
}