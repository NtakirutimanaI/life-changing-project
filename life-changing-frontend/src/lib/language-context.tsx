import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'rw' | 'sw' | 'fr';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.how_we_work': 'How We Work',
        'nav.impact': 'Impact & Stories',
        'nav.resources': 'Resources',
        'nav.contact': 'Contact',
        'nav.donate': 'Donate Now',
        'hero.title': 'Empowering Women and Girls for a Brighter Future',
        'hero.subtitle': 'We support vulnerable young women, caregivers, and girls through education, health, and mentorship.',
        'btn.learn_more': 'Learn More',
        'btn.donate': 'Donate',
        'about.title': 'About Life-Changing Endeavor Organization',
        'about.mission_title': 'Our Mission',
        'about.vision_title': 'Our Vision',
        'about.values_title': 'Our Core Values'
    },
    rw: {
        'nav.home': 'Ahabanza',
        'nav.about': 'Abo Turibo',
        'nav.how_we_work': 'Uko Dukora',
        'nav.impact': 'Inkuruz\'Imfashanyo',
        'nav.resources': 'Ibikoresho',
        'nav.contact': 'Twandikire',
        'nav.donate': 'Tanga Inkunga',
        'hero.title': 'Gushoboza Abagore n\'Abakobwa kubaho neza',
        'hero.subtitle': 'Tushyigikira abagore n\'abakobwa bakeneye ubufasha binyuze mu burezi, ubuzima, n\'ubupfura.',
        'btn.learn_more': 'Menya Byinshi',
        'btn.donate': 'Tanga Inkunga',
        'about.title': 'Kubyerekeye Umuryango LCEO',
        'about.mission_title': 'Inshingano Zacu',
        'about.vision_title': 'Icyerekezo Cyacu',
        'about.values_title': 'Indangagaciro Zacu'
    },
    sw: {
        'nav.home': 'Nyumbani',
        'nav.about': 'Kuhusu Sisi',
        'nav.how_we_work': 'Jinsi Tunavyofanya Kazi',
        'nav.impact': 'Athari na Hadithi',
        'nav.resources': 'Rasilimali',
        'nav.contact': 'Wasiliana Nasi',
        'nav.donate': 'Changa Sasa',
        'hero.title': 'Kuwawezesha Wanawake na Wasichana kwa Maisha Bora',
        'hero.subtitle': 'Tunasaidia wanawake vijana walio katika mazingira magumu, walezi, na wasichana kupitia elimu, afya, na ushauri.',
        'btn.learn_more': 'Jifunze Zaidi',
        'btn.donate': 'Changa',
        'about.title': 'Kuhusu Shirika la LCEO',
        'about.mission_title': 'Dhamira Yetu',
        'about.vision_title': 'Maono Yetu',
        'about.values_title': 'Maadili Yetu ya Msingi'
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À Propos',
        'nav.how_we_work': 'Notre Travail',
        'nav.impact': 'Impact et Histoires',
        'nav.resources': 'Ressources',
        'nav.contact': 'Contact',
        'nav.donate': 'Faire un Don',
        'hero.title': 'Autonomiser les Femmes et les Filles pour un Avenir Meilleur',
        'hero.subtitle': 'Nous soutenons les jeunes femmes vulnérables, les tuteurs et les filles par l\'éducation, la santé et le mentorat.',
        'btn.learn_more': 'En Savoir Plus',
        'btn.donate': 'Faire un don',
        'about.title': 'À Propos de l\'Organisation LCEO',
        'about.mission_title': 'Notre Mission',
        'about.vision_title': 'Notre Vision',
        'about.values_title': 'Nos Valeurs Fondamentales'
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string) => {
        return translations[language][key] || translations['en'][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
