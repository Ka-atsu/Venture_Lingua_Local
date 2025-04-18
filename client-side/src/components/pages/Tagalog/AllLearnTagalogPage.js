import React from 'react';
import BasicWordsTagalog from '../../Dialects/Tagalog/Learn Tagalog/Basic Words/BasicWordsTagalog';
import CommonPharseTagalog from '../../Dialects/Tagalog/Learn Tagalog/Common Phrase/CommonPharseTagalog';
import CulturalContextualTagalog from '../../Dialects/Tagalog/Learn Tagalog/Cultural Tagalog/CulturalContextualTagalog';
import ExpressionsTagalog from '../../Dialects/Tagalog/Learn Tagalog/Useful Expression/ExpressionTagalog';
import PronounceSentenceTagalog from '../../Dialects/Tagalog/Learn Tagalog/Pronouns and Sentence/PronounseSentenceTagalog';
import VerbsTensesTagalog from '../../Dialects/Tagalog/Learn Tagalog/Verb and Tenses/VerbsTensesTagalog';
import useScreenSize from '../Screen Size Hook/useScreenSize';

export function TagalogBasicWordsPage() {
    console.log("TagalogVocabularyEasyPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <BasicWordsTagalog screenSize={screenSize === 'small'}/>
        </>
    );
}

export function TagalogCommonPhrasePage() {
    console.log("TagalogCommonPhrasePage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <CommonPharseTagalog screenSize={screenSize === 'small'}/>
        </>
    );
}

export function TagalogCulturalPage() {
    console.log("TagalogCulturalPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <CulturalContextualTagalog screenSize={screenSize === 'small'}/>
        </>
    );
}

export function TagalogExpressionsPage() {
    console.log("TagalogExpressionsPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <ExpressionsTagalog screenSize={screenSize === 'small'}/>
        </>
    );
}

export function TagalogPronouncePage() {
    console.log("TagalogPronouncePage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <PronounceSentenceTagalog screenSize={screenSize === 'small'}/>
        </>
    );
}


export function TagalogVerbsTensesPage() {
    console.log("TagalogVerbsTensesPage is rendering!");
    const screenSize = useScreenSize();
    return (
        <> 
            <VerbsTensesTagalog screenSize={screenSize === 'small'}/>
        </>
    );
}