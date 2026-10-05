# Book Seller — informativa sull’uso dei dati

Informativa del servizio personale di Andrea Ferendeles per la gestione dei propri libri usati. Ultimo aggiornamento: 5 ottobre 2026.

Il servizio collega esclusivamente l’account eBay del proprietario. Con il consenso personale in sola lettura verifica impostazioni e inventario. Un ulteriore consenso di gestione vendite permette, quando il flusso operativo è abilitato, di pubblicare gli annunci dei libri, aggiornare disponibilità e prezzi entro le soglie del proprietario, gestire spedizioni e messaggi su eBay.

Le credenziali applicative e i token OAuth sono conservati sul server in storage privato, accessibile soltanto al proprietario autenticato. I token consentono le chiamate API autorizzate; la password dell’account eBay non viene raccolta dal servizio.

Il collegamento usa identificativi pseudonimizzati dell’account per riconoscere eventuali richieste di cancellazione. Una notifica eBay con firma valida rimuove i token utente corrispondenti e gli stati OAuth associati. Il registro tecnico contiene un hash dell’evento e le date, con conservazione limitata a 48 ore.

Questa pagina pubblica contiene soltanto l’informativa. Le foto e le descrizioni degli articoli vengono pubblicate su eBay quando autorizzate dal proprietario. Configurazione e credenziali rimangono private. Non vengono effettuati rimborsi, acquisti di servizi, trasferimenti bancari o campagne pubblicitarie da questo modulo.

Il proprietario può revocare il consenso nelle impostazioni eBay. Quando saranno abilitati i flussi ordini e messaggi, verranno letti tramite le API eBay soltanto i dati necessari alla vendita, alla comunicazione con l’acquirente e alla spedizione. Le informazioni operative degli ordini saranno accessibili al proprietario autenticato. Gli avvisi operativi saranno inviati ai suoi canali Telegram e Gmail già configurati, senza pubblicare dati degli acquirenti. Gli identificativi operativi serviranno anche a evitare invii duplicati. I dati degli ordini non saranno utilizzati per pubblicità o ceduti ad altri venditori. La registrazione dei soli eventi di cancellazione dell’account eBay resta distinta dal registro operativo degli ordini.