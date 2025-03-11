import React from 'react';
import BasicWordsTagalog from '../../Dialects/Tagalog/Learn Tagalog/Basic Words/BasicWordsTagalog';
import CommonPharseTagalog from '../../Dialects/Tagalog/Learn Tagalog/Common Phrase/CommonPharseTagalog';
import CulturalContextualTagalog from '../../Dialects/Tagalog/Learn Tagalog/Cultural Tagalog/CulturalContextualTagalog';
import ExpressionsTagalog from '../../Dialects/Tagalog/Learn Tagalog/Useful Expression/ExpressionTagalog';
import PronounceSentenceTagalog from '../../Dialects/Tagalog/Learn Tagalog/Pronouns and Sentence/PronounseSentenceTagalog';
import VerbsTensesTagalog from '../../Dialects/Tagalog/Learn Tagalog/Verb and Tenses/VerbsTensesTagalog';

export function TagalogBasicWordsPage() {
    console.log("TagalogVocabularyEasyPage is rendering!");
    return (
        <> 
            <BasicWordsTagalog />
        </>
    );
}

export function TagalogCommonPhrasePage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <CommonPharseTagalog />
        </>
    );
}

export function TagalogCulturalPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <CulturalContextualTagalog />
        </>
    );
}

export function TagalogExpressionsPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <ExpressionsTagalog />
        </>
    );
}

export function TagalogPronouncePage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <PronounceSentenceTagalog />
        </>
    );
}


export function TagalogVerbsTensesPage() {
    console.log("TagalogPronunciationEasyPage is rendering!");
    return (
        <> 
            <VerbsTensesTagalog />
        </>
    );
}