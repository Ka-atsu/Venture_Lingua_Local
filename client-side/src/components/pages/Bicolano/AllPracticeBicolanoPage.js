import React from 'react';
import EasyVocabularyChallengeBicolano from '../../Dialects/Bicolano/Practice Bicolano/Vocabulary Challenges/EasyVocabularyChallengeBicolano';
import EasyPronunciationChallengeBicolano from '../../Dialects/Bicolano/Practice Bicolano/Pronunciation Challenges/EasyPronunciationChallengeBicolano';
import EasySentenceChallengeBicolano from '../../Dialects/Bicolano/Practice Bicolano/Sentence Challenges/EasySentenceChallengeBicolano';
import EasyPhraseChallengeBicolano from '../../Dialects/Bicolano/Practice Bicolano/Phrase Challenges/EasyPhraseChallengeBicolano';
import EasyTranslationChallengeBicolano from '../../Dialects/Bicolano/Practice Bicolano/Translation Challenges/EasyTranslationChallengeBicolano';
import useScreenSize from '../Screen Size Hook/useScreenSize';

export function BicolanoVocabularyEasyPage() {
    const screenSize = useScreenSize();
    console.log("TagalogVocabularyEasyPage is rendering!");
    return (
        <> 
            <EasyVocabularyChallengeBicolano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function BicolanoPronunciationEasyPage() {
    const screenSize = useScreenSize();
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <EasyPronunciationChallengeBicolano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function BicolanoSentenceEasyPage() {
    const screenSize = useScreenSize();
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <EasySentenceChallengeBicolano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function BicolanoPhraseEasyPage() {
    const screenSize = useScreenSize();
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <EasyPhraseChallengeBicolano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function BicolanoTranslationEasyPage() {
    const screenSize = useScreenSize();
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <EasyTranslationChallengeBicolano screenSize={screenSize === 'small'}/>
        </>
    );
}