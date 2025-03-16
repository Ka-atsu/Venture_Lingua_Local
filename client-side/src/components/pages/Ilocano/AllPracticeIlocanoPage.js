import React from 'react';
import EasyVocabularyChallengeIlocano from '../../Dialects/Ilocano/Practice Ilocano/Vocabulary Challenges/EasyVocabularyChallengeIlocano';
import EasyPhraseChallengeIlocano from '../../Dialects/Ilocano/Practice Ilocano/Phrase Challenges/EasyPhraseChallengeIlocano';
import EasySentenceChallengeIlocano from '../../Dialects/Ilocano/Practice Ilocano/Sentence Challenges/EasySentenceChallengeIlocano';
import EasyPronunciationChallengeIlocano from '../../Dialects/Ilocano/Practice Ilocano/Pronunciation Challenges/EasyPronunciationChallengeIlocano';
import EasyTranslationChallengeIlocano from '../../Dialects/Ilocano/Practice Ilocano/Translation Challenges/EasyTranslationChallengeIlocano';

export function IlocanoVocabularyEasyPage() {
    console.log("TagalogVocabularyEasyPage is rendering!");
    return (
        <> 
            <EasyVocabularyChallengeIlocano />
        </>
    );
}

export function IlocanoPronunciationEasyPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <EasyPronunciationChallengeIlocano />
        </>
    );
}

export function IlocanoSentenceEasyPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <EasySentenceChallengeIlocano />
        </>
    );
}

export function IlocanoPhraseEasyPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <EasyPhraseChallengeIlocano />
        </>
    );
}

export function IlocanoTranslationEasyPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <EasyTranslationChallengeIlocano />
        </>
    );
}