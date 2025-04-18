import React from 'react';
import BasicWordsIlocano from '../../Dialects/Ilocano/Learn Ilocano/Basic  Words/BasicWordsIlocano';
import CommonPharseIlocano from '../../Dialects/Ilocano/Learn Ilocano/Common Phrase/CommonPharseIlocano';
import CulturalContextualIlocano from '../../Dialects/Ilocano/Learn Ilocano/Cultural Contex/CulturalContextualIlocano';
import ExpressionIlocano from '../../Dialects/Ilocano/Learn Ilocano/Useful Expression/ExpressionIlocano';
import PronounseSentenceIlocano from '../../Dialects/Ilocano/Learn Ilocano/Pronouns and Sentence/PronounseSentenceIlocano';
import VerbsTensesIlocano from '../../Dialects/Ilocano/Learn Ilocano/Verb and Tenses/VerbsTensesIlocano';
import useScreenSize from '../Screen Size Hook/useScreenSize';

export function IlocanoBasicWordsPage() {
    console.log("TagalogVocabularyEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <BasicWordsIlocano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function IlocanoCommonPhrasePage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <CommonPharseIlocano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function IlocanoCulturalPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <CulturalContextualIlocano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function IlocanoExpressionsPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <ExpressionIlocano screenSize={screenSize === 'small'}/>
        </>
    );
}

export function IlocanoPronouncePage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <PronounseSentenceIlocano screenSize={screenSize === 'small'}/>
        </>
    );
}


export function IlocanoVerbsTensesPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <VerbsTensesIlocano screenSize={screenSize === 'small'}/>
        </>
    );
}

