"use client"
import React, { useState, useRef } from 'react'
import { useParams } from "next/navigation";
import Modal from '@/components/Modal/Modal';
import HebergementsLink from "@/components/HebergementsLink/HebergementsLink"


const hebergementData = {
    cloudline: {
        title: "Cloudline Hub",
        rooms: [
            {
                roomName: "The Overlook Cabin",
                key: "overlook_cabin",
                src:"/view_6.avif",
                color: "#e39c7e",
                desc: [
                    "Situées au 1er étage du Manoir, vous y accédez par le hall d'accueil puis l'escalier du salon, ou directement par l'escalier de la tour, Une indépendance totale!", 
                    "Charme et authenticité sont au rendez-vous, avec sa cheminée du XVième siècle classée, ses murs en pierre, ses portes en chêne et ses poutres centenaires.",
                    "Vous disposez sur plus de 50 m², d'une chambre principale avec une literie de 180*200 haute qualité (possibilité de séparer en 2 lits de 90 à la demande), d'une vaste salle d'eau (double vasques, baignoire balnéothérapie, WC privatif)", 
                    "Un superbe espace salon avec vue sur la vallée (canapé convertible, literie pouvant accueillir 2 personnes complémentaires - voir tarif supplémentaire)"],
            },
            {
                roomName: "The Pine Suite",
                key: "pine_suit",
                src:"/view_3.avif",
                color: "#e39c7e",
                desc: [
                    "Situées au rez-de-chaussée du Manoir, vous y accédez directement par la cour principale, le hall d'accueil ou par la tour, Une indépendance totale!", 
                    "Charme et authenticité sont au rendez-vous, avec ses murs en pierre, ses portes en chêne et ses poutres centenaires. Vous disposez sur plus de 50 m², d'une chambre principale avec une literie de 180*200 haute qualité (possibilité de séparer en 2 lits de 90 à la demande)", 
                    "Une vaste salle d'eau (double vasques, grande douche à l'italienne, WC privatif) et d'un espace salon en contre-bas  (canapé convertible, literie de pouvant accueillir 2 personnes complémentaires - voir tarif supplémentaire).", 
                    "Le tout donnant sur votre terrasse privative avec vue sur la vallée."
                ],
            },
            {
                roomName: "The Eagle’s Nest",
                key: "eagle_nest",
                src:"/view_18.jpeg",
                color: "#e39c7e",
                desc: [
                    "Situées au 1er étage du Manoir, vous y accédez par le hall d'accueil puis l'escalier du salon.", 
                    "Charme et authenticité sont au rendez-vous, avec ses murs en pierre, ses portes en chêne et ses poutres centenaires. Vous disposez sur plus de 35 m², d'une chambre avec une literie de 160*200 haute qualité (possibilité de séparer en 2 lits de 80 à la demande).", 
                    "Une vaste salle d'eau (vasque, grande douche à l'italienne, WC privatif) et d'un dressing avec vue sur la vallée.", 
                    "Vous avez un accès direct à la bibliothèque et l'espace salon du 1er étage, à disposition de nos hôtes."
                ],
            },
        ]
    },
    bayside: {
        title: "Bayside Hub",
        rooms: [
            {
                roomName: "Gîte Loft",
                key: "loft",
                src: "/gite_etable/overview_loft.jpeg",
                color: "#e39c7e",
                desc: [
                    "Il occupe tout le premier étage de l’ancienne étable sur près de 250m². Vous y accédez par la cour et son escalier en pierre.", 
                    "Sous sa charpente centenaire et sa volige en peuplier, vous pourrez vous y retrouver en famille ou entre amis. Avec ses 4 chambres (dont 2 en mezzanine sur la pièce de vie) c'est 15 couchages qui sont à votre disposition.",
                    "L'Etable Gîte-Loft est entièrement climatisé et sécurisé sous alarme.", 
                    "La salle de vie de plus de 80m² (séjour, salon, cuisine entièrement équipée) avec terrasse ouverte sur la cour à un accès direct à la piscine et au Spa (partagés avec les chambres d'hôtes et le dortoir).",
                    "Deux suites de plus de 50m² vous proposent un espace salon détente, un espace nuit avec couchage de 180 (dédoublable en 2 X 90), une vaste Salle d'eau double et un WC privatif. En mezzanine 3 couchages de 80 (ou 1 couchage 160 +1 couchage 80).",
                    "Deux Chambres en mezzanine ouvertes sur la salle de vie façon loft se ferment par des rideaux occultants, et vous proposent 3 couchages de 80 par chambre. Une salle d'eau et un WC au R.D.C sont dédiés pour ces 2 chambres."
                    ],
                pay: "Tarif TTC la nuitée pour 2 personnes, taxe de séjour en sus",
                off: "Remise de 15% à partir de 3 nuités",
                tarifs: [
                    {
                        juinaout24: "165.00€",
                        avrmaiseptoct24: "145.00€",
                        novtomars: "125.00€"
                    }
                ],
                plus:[
                    {
                        addNight: "30.00€ TTC/pers",
                        englshB: "5.00€",
                        hamam: "7.50€ les 30min de sauna/hammam",
                        navette: "Service Vip Aéroport"
                    }
                ],
            },
            {
                roomName: "Gîte Studio",
                key: "studio",
                src:"/gite_studio/view_5.jpg",
                color: "#e39c7e",
                desc: [
                    "Situé au rez-de-chaussée de l'étable, plein ouest, Le Studio est idéal pour une personne seule ou un couple, c'est l'intimité et la tranquillité assurée!", 
                    "Climatisé, avec terrasse privative de 50m² dans le prolongement de la piscine et du Spa (partagée avec les gîtes et le dortoir)", 
                    "Pièce de vie de 26 m² avec son lit escamotable (sommier et matelas de 160), coin cuisine équipée (induction 2 feux, micro-onde, réfrigérateur), salle de douche à l'italienne et WC privatif.", 
                    "Accès au Sauna et au Hammam sur réservation pour plus d'intimité."
                ],
                pay: "Tarif TTC la nuitée pour 2 personnes, taxe de séjour en sus",
                off: "Remise de 15% à partir de 3 nuités",
                tarifs: [
                    {
                        juinaout24: "165.00€",
                        avrmaiseptoct24: "145.00€",
                        novtomars: "125.00€"
                    }
                ],
                plus:[
                    {
                        addNight: "30.00€ TTC/pers",
                        englshB: "5.00€",
                        hamam: "7.50€ les 30min de sauna/hammam",
                        navette: "Service Vip Aéroport"
                    }
                ],

            },
        ]
    },
};

const HebergementPage = () => {
    const params = useParams();
    const { slug } = params;
    const [modal, setModal] = useState({active: false, index: 0})
    const roomsRef = useRef(null);

    // Récupère les données en fonction du slug
    const hebergement = hebergementData[slug];

    if (!hebergement) {
        return <div>Hébergement non trouvé</div>;
    }

    return (
        <div ref={roomsRef} className='container mx-auto my-auto'>
            <h1  className="font-stretch text-9xl font-bold text-left m-10">{hebergement.title}</h1>
            {hebergement.rooms?.map((room, index) => (
                <HebergementsLink 
                    key={index} 
                    index={index} 
                    title={room.roomName} 
                    setModal={setModal} 
                    roomDetailUrl={`/hebergements/${slug}/${room.key}`}
                />
            ))}
            <Modal modal={modal} projects={hebergement.rooms}/>
        </div>
    )
}

export default HebergementPage