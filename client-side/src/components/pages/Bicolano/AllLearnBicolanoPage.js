import React from 'react';
import BasicWordsBicolano from '../../Dialects/Bicolano/Learn Bicolano/Basic  Words/BasicWordsBicolano';
import CommonPharseBicolano from '../../Dialects/Bicolano/Learn Bicolano/Common Phrase/CommonPharseBicolano';
import CulturalContextualBicolano from '../../Dialects/Bicolano/Learn Bicolano/Cultural Contex/CulturalContextualBicolano';
import PronounseSentenceBicolano from '../../Dialects/Bicolano/Learn Bicolano/Pronouns and Sentence/PronounseSentenceBicolano';
import ExpressionBicolano from '../../Dialects/Bicolano/Learn Bicolano/Useful Expression/ExpressionBicolano';
import VerbsTensesBicolano from '../../Dialects/Bicolano/Learn Bicolano/Verb and Tenses/VerbsTensesBicolano';
import useScreenSize from '../Screen Size Hook/useScreenSize';

export function BicolanoBasicWordsPage() {
    const screenSize = useScreenSize();
    console.log("TagalogVocabularyEasyPage is rendering!");
    return (
        <> 
            <BasicWordsBicolano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function BicolanoCommonPhrasePage() {
    const screenSize = useScreenSize();
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <CommonPharseBicolano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function BicolanoCulturalPage() {
    const screenSize = useScreenSize();
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <CulturalContextualBicolano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function BicolanoExpressionsPage() {
    const screenSize = useScreenSize();
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <ExpressionBicolano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function BicolanoPronouncePage() {
    const screenSize = useScreenSize();
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <PronounseSentenceBicolano screenSize={screenSize === 'small'}/>
        </>
    );
}


export function BicolanoVerbsTensesPage() {
    const screenSize = useScreenSize();
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <VerbsTensesBicolano screenSize={screenSize === 'small'}/>
        </>
    );
}

