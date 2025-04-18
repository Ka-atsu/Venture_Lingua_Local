import React from 'react';
import BasicWordsCebuano from '../../Dialects/Cebuano/Learn Cebuano/Basic  Words/BasicWordsCebuano';
import CommonPharseCebuano from '../../Dialects/Cebuano/Learn Cebuano/Common Phrase/CommonPharseCebuano';
import CulturalContextualCebuano from '../../Dialects/Cebuano/Learn Cebuano/Cultural Contex/CulturalContextualCebuano';
import ExpressionCebuano from '../../Dialects/Cebuano/Learn Cebuano/Useful Expression/ExpressionCebuano';
import PronounseSentenceCebuano from '../../Dialects/Cebuano/Learn Cebuano/Pronouns and Sentence/PronounseSentenceCebuano';
import VerbsTensesCebuano from '../../Dialects/Cebuano/Learn Cebuano/Verb and Tenses/VerbsTensesCebuano';
import useScreenSize from '../Screen Size Hook/useScreenSize';

export function CebuanoBasicWordsPage() {
    console.log("TagalogVocabularyEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <BasicWordsCebuano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function CebuanoCommonPhrasePage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <CommonPharseCebuano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function CebuanoCulturalPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <CulturalContextualCebuano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function CebuanoExpressionsPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <ExpressionCebuano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function CebuanoPronouncePage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <PronounseSentenceCebuano screenSize={screenSize === 'small'}/>
        </>
    );
}


export function CebuanoVerbsTensesPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <VerbsTensesCebuano screenSize={screenSize === 'small'}/>
        </>
    );
}

