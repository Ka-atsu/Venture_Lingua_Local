import React from 'react';
import BasicWordsBicolano from '../../Dialects/Bicolano/Learn Bicolano/Basic  Words/BasicWordsBicolano';
import CommonPharseBicolano from '../../Dialects/Bicolano/Learn Bicolano/Common Phrase/CommonPharseBicolano';
import CulturalContextualBicolano from '../../Dialects/Bicolano/Learn Bicolano/Cultural Contex/CulturalContextualBicolano';
import PronounseSentenceBicolano from '../../Dialects/Bicolano/Learn Bicolano/Pronouns and Sentence/PronounseSentenceBicolano';
import ExpressionBicolano from '../../Dialects/Bicolano/Learn Bicolano/Useful Expression/ExpressionBicolano';
import VerbsTensesBicolano from '../../Dialects/Bicolano/Learn Bicolano/Verb and Tenses/VerbsTensesBicolano';

export function BicolanoBasicWordsPage() {
    console.log("TagalogVocabularyEasyPage is rendering!");
    return (
        <> 
            <BasicWordsBicolano />
        </>
    );
}

export function BicolanoCommonPhrasePage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <CommonPharseBicolano />
        </>
    );
}

export function BicolanoCulturalPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <CulturalContextualBicolano />
        </>
    );
}

export function BicolanoExpressionsPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <ExpressionBicolano />
        </>
    );
}

export function BicolanoPronouncePage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <PronounseSentenceBicolano />
        </>
    );
}


export function BicolanoVerbsTensesPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <VerbsTensesBicolano />
        </>
    );
}

