import React from 'react';
import EasyVocabularyChallengeTagalog from '../../Dialects/Tagalog/Practice Tagalog/Vocabulary Challenges/EasyVocabularyChallengeTagalog';
import EasyPronunciationChallengeTagalog from '../../Dialects/Tagalog/Practice Tagalog/Pronunciation Challenges/EasyPronunciationChallengeTagalog';
import EasySentenceChallengeTagalog from '../../Dialects/Tagalog/Practice Tagalog/Sentence Challenges/EasySentenceChallengeTagalog';
import EasyPhraseChallengeTagalog from '../../Dialects/Tagalog/Practice Tagalog/Phrase Challenges/EasyPhraseChallengeTagalog';
import EasyTranslationChallengeTagalog from '../../Dialects/Tagalog/Practice Tagalog/Translation Challenges/EasyTranslationChallengeTagalog';
import MediumSentenceChallengeTagalog from '../../Dialects/Tagalog/Practice Tagalog/Sentence Challenges/MediumSentenceChallengeTagalog';
import useScreenSize from '../Screen Size Hook/useScreenSize';

export function TagalogVocabularyEasyPage() {
    const screenSize = useScreenSize();
    console.log("TagalogVocabularyEasyPage is rendering!");
    return (
        <> 
            <EasyVocabularyChallengeTagalog screenSize={screenSize === 'small'} />
        </>
    );
}

export function TagalogPronunciationEasyPage() {
    const screenSize = useScreenSize();
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <EasyPronunciationChallengeTagalog screenSize={screenSize === 'small'}/>
        </>
    );
}

export function TagalogSentenceEasyPage() {
    const screenSize = useScreenSize();
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <EasySentenceChallengeTagalog screenSize={screenSize === 'small'}/>
        </>
    );
}

export function TagalogPhraseEasyPage() {
    const screenSize = useScreenSize();
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <EasyPhraseChallengeTagalog screenSize={screenSize === 'small'}/>
        </>
    );
}

export function TagalogTranslationEasyPage() {
    const screenSize = useScreenSize();
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <EasyTranslationChallengeTagalog screenSize={screenSize === 'small'}/>
        </>
    );
}

export function TagalogSentenceMediumPage() {
    const screenSize = useScreenSize();
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <MediumSentenceChallengeTagalog screenSize={screenSize === 'small'}/>
        </>
    );
}
