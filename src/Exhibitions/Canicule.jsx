import { useTranslation } from "react-i18next";
import "./Canicule.css";

function Canicule() {
  const { i18n } = useTranslation();
  const isFrench = i18n.language === "fr";

  return (
    <div className="exhibitions-page">
      <h3>CANICULE</h3>
      <div className="exhibition-description exhibition-essay">
        {isFrench ? (
          <>
            <p>
              Étouffante, sensuelle et suffocante: la hausse des températures
              submerge la dimension sensuelle de la réalité; la perception se
              plie et se brouille à mesure que nous approchons les limites
              physiologiques et psychiques. Dans CANICULE, dix-sept artistes
              issus des domaines de la peinture, de la photographie, de la
              sculpture, de l’illustration et de la vidéo jouent au sens propre,
              figuré et transformateur dans cet état hypersensoriel, éviscérant
              le désir intime pour aboutir à l’angoisse climatique mondiale.
            </p>
            <p>
              On rencontre la ville comme un rêve fiévreux, des scènes
              familières désormais étranges: dans le diptyque de{" "}
              <strong>Delia Landers</strong> <em>Montreal été in Monochrome</em>
              , le linge languit sur une ligne de ruelle, dramatique sous un
              soleil étouffant, juxtaposé au mirage du répit d’une nuit du Mile
              End; on observe Montréal, Paris et la Thaïlande sous des angles
              surréalistes et intimes dans la série photographique{" "}
              <em>Combustions</em> de <strong>Théo Schornstein</strong>.{" "}
              <em>Les Trois Esprits de Feu</em> de{" "}
              <strong>Véro Marengère</strong> visualisent la distorsion
              sensorielle dans une stupeur induite par la température, la
              manipulation intentionnelle de l’image imitant les propres
              reconfigurations de l’esprit. <em>Where there’s smoke</em> de{" "}
              <strong>Marie Foxall</strong>, la désorientation et l’affront
              sensoriel face au spectacle d’une voiture en feu sont évoqués par
              le choix incongru et délicieux de broderies de perles dans un
              cadre en laiton pointu.
            </p>
            <p>
              Nous nous dirigeons vers l’intérieur, la charge dans et entre les
              corps étant presque auditive comme un faible bourdonnement
              électrique. L’environnement extérieur exigeant est un théâtre de
              tension, de désir: l’énergie érotique du corps apparaît doublement
              dans <em>Hues</em> et <em>Undern-heat</em> de{" "}
              <strong>Charlotte Poitras</strong>, de manière suggestive dans le
              strip-tease représenté et matériellement à travers la caméra
              thermique; le collage peint de <strong>Bec Sommer</strong>,{" "}
              <em>Watch It Come Down (Fearplay)</em>, gratte la corde tendue
              entre plaisir et douleur, émettant la vibration d’un état torride.
              La pression complique le ravissement physique et émotionnel: un
              corps gît voulant et frustré alors que la chaleur confond le
              contact dans <em>untitled (canicule)</em> de{" "}
              <strong>Yuko Fedrau</strong>; dans <em>Through Him</em> de{" "}
              <strong>Michael Malenfant</strong>, on rencontre la charge vive de
              deux êtres qui ne se touchent pas encore et l’intimité médiatisée
              mais distanciée du médium photographique. Quand les corps se
              rencontrent dans{" "}
              <em>
                mom sprays the mating ants in the kitchen / we try not to be
                next
              </em>{" "}
              de <strong>Juno Soleil Vieira</strong>, la mémoire sensuelle est
              son propre climat chaud et humide. Des dynamiques invisibles
              éclatent et les frictions s’expriment également à l’autre pôle:{" "}
              <em>Love Island</em> de <strong>Julia Kansas</strong> est un
              vaisseau pour l’imprévisibilité et l’irrationalité dans la
              formation et la fracture des relations humaines.
            </p>
            <p>
              Le langage de la température est élémentaire: points d’ébullition,
              points de fusion, transitions de phase. Nous sommes confrontés à
              l’instabilité de la matière dans <em>Fleeting Days</em> de{" "}
              <strong>Jade Boutilier</strong>, où le gallium solide et
              sculptural tombe goutte à goutte liquide à son point de fusion de
              29 °C dans une flaque métallique en contrebas, sublime et étrange.
              Et quoi de plus emblématique d’une canicule que la fonte des
              glaces: la sculpture de <strong>Sara Sadawi</strong>{" "}
              <em>Sorry for how I acted (the heat got to me)</em> suspend une
              glace oubliée dans un état limite, évoquant l’excès et la
              volatilité émotionnelle, et <em>Ice Cream</em> de{" "}
              <strong>Karen Grosman</strong> donne forme à la viscéralité
              nébuleuse du changement physique. Ces deux œuvres céramiques
              utilisent la chaleur superlative du four pour fixer dans le temps
              un processus de transformation.
            </p>
            <p>
              La chaleur atmosphérique nous rappelle inexorablement qu’on existe
              sur un plan physique vulnérable. Les teintes incandescentes de{" "}
              <em>Rookies</em> par <strong>Mary Hayes</strong> sont la lecture
              d’un thermomètre mesurant le climat intérieur et extérieur; ces
              conditions environnementales pressantes suscitent l’anxiété, mais
              obligent aussi le corps et l’esprit à s’adapter. Alors que la
              température grimpante nous propulse vers la cacotopie,{" "}
              <em>Post-Apocalyptic Hottie</em> de{" "}
              <strong>Maxime Perreault</strong> s’habille pour un avenir queer
              et périlleux où mode et protection peuvent et doivent converger.{" "}
              <em>Ants</em> d’<strong>eightyaday</strong> nous avertit
              malicieusement que nous sommes complaisants face à notre désastre,
              et le tableau de <strong>Tiphaine Lenaïk</strong>{" "}
              <em>Exister où l’on y arrive</em> est un témoin de la vie dans une
              ville de plus en plus inhabitable et désorientante, où nous
              devrons peut-être envisager de survivre sans prospérer.
            </p>
            <p>
              CANICULE interroge ce que signifie habiter un corps soumis aux
              vicissitudes de notre environnement et de notre climat émotionnel.
              Parfois, pour tenir le coup, il faut savoir lâcher prise –
              laissons ces œuvres nous transporter dans l’euphorie et la
              dysphorie de la canicule.
            </p>
            <p className="essay-attribution">— Texte de Lina Hu</p>
          </>
        ) : (
          <>
            <p>
              Sweltering, sultry, and smothering – rising temperatures overwhelm
              the sensual dimension of reality; perception bends and blurs as we
              approach physiological and psychic limits. In CANICULE, seventeen
              artists across painting, photography, sculpture, illustration, and
              video play literally, figuratively and transformatively in this
              hyper-sensory state, eviscerating private desire to global climate
              anxiety.
            </p>
            <p>
              We meet the city as a fever dream, familiar scenes now strange: in{" "}
              <strong>Delia Landers</strong> diptych{" "}
              <em>Montreal été in Monochrome</em>, laundry languishes on an
              alleyway line, dramatic in the stifling sun, juxtaposed with the
              mirage of respite on a Mile End night; we view Montreal, Paris and
              Thailand at surreal and intimate angles in{" "}
              <strong>Théo Schornstein</strong>’s photograph series{" "}
              <em>Combustions</em>. <strong>Véro Marengère</strong>’s{" "}
              <em>The Three Fire Spirits</em> visualizes the sensory distortion
              in a temperature-induced stupor, the intentional manipulation of
              image mimicking the mind’s own reconfigurations. In{" "}
              <em>Where there’s smoke</em> by <strong>Marie Foxall</strong>, the
              disorientation and sensory affront at the spectacle of a burning
              car is invoked by the incongruous and delightful choice of beaded
              embroidery for a medium and the sharp brass frame.
            </p>
            <p>
              We move inwards, the charge within and between bodies almost
              auditory as a low electric hum. The challenging external
              environment is a theatre of tension, of desire: the erotic energy
              of the body is doubly surfaced in{" "}
              <strong>Charlotte Poitras</strong>’ <em>Undern-heat</em>,
              suggestively in the depicted striptease and materially through the
              thermal camera; <strong>Bec Sommer</strong>’s painted collage{" "}
              <em>Watch It Come Down (Fearplay)</em> strums the taut string
              between pleasure and pain, emitting the vibration of a torrid
              state. The pressure complicates physical and emotional rapture: a
              body lies wanting and frustrated as the heat confounds contact in{" "}
              <em>untitled (canicule)</em> by <strong>Yuko Fedrau</strong>; in{" "}
              <strong>Michael Malenfant</strong>
              ’s <em>Through Him</em>, we encounter the vivid charge of two
              beings not yet touching and the mediated but distanced intimacy of
              the photographic medium. When bodies do meet in{" "}
              <strong>Juno Soleil Vieira</strong>’s{" "}
              <em>
                mom sprays the mating ants in the kitchen / we try not to be
                next
              </em>
              , sensual memory is its own hot and humid climate. Invisible
              dynamics erupt and friction finds expression equally at the other
              pole: <strong>Julia Kansas</strong>’ <em>Love Island</em> is a
              vessel for the unpredictability and irrationality in the formation
              and fracture of human relationships.
            </p>
            <p>
              The language of temperature is elemental: boiling points, melting
              points, phase transitions. We confront the instability of matter
              in <em>Fleeting Days</em> by <strong>Jade Boutilier</strong>,
              where sculptural solid gallium falls drop by liquid drop at its
              melting point of 29°C into a metallic puddle below, sublime and
              uncanny. And what is more emblematic of a heatwave than melting
              ice cream: <strong>Sara Sadawi</strong>’s sculpture{" "}
              <em>Sorry for how I acted (the heat got to me)</em> suspends a
              forgotten popsicle in a boundary state, evoking excess and
              emotional volatility, and <strong>Karen Grosman</strong>’s{" "}
              <em>Ice Cream</em> gives form to the nebulous viscerality of
              physical change. Both these ceramic works employ the superlative
              heat of the kiln to fix in time a process of transformation.
            </p>
            <p>
              Atmospheric heat is an inexorable reminder we exist on a
              vulnerable, physical plane. The calescent ember tones of{" "}
              <em>Rookies</em> by <strong>Mary Hayes</strong> is a thermometer
              reading for internal and external climate, the pressing
              environmental conditions precipitating anxiety but also compelling
              the adaptability of the body and mind. As the climbing temperature
              propels us towards cacotopia, <strong>Maxime Perreault</strong>’s{" "}
              <em>Post-Apocalyptic Hottie</em> dresses for a queer, perilous
              future where fashion and protection can and must converge.{" "}
              <strong>Eighty a Day</strong>’s <em>Ants</em> impishly admonishes
              that we are complacent in our disaster, and{" "}
              <strong>Tiphaine Lenaïk</strong>’s painting{" "}
              <em>Exister où l’on y arrive</em> is a witness to life in the
              increasingly uninhabitable and disorienting city, where we may
              have to contemplate surviving without thriving.
            </p>
            <p>
              CANICULE interrogates what it is to reside in a body subject to
              the vicissitudes of our environment and emotional weather. At
              times, in order to endure, we must surrender – let the works here
              bear us into the euphoria and dysphoria of the heatwave.
            </p>
            <p className="essay-attribution">— Text by Lina Hu</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Canicule;
