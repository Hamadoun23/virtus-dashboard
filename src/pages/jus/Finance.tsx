import { Landmark } from 'lucide-react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Badge, TableVirtus } from '../../components/ui/Table';
import { tresorerie } from './donnees';

export default function Finance() {
  return (
    <div>
      <PageHeader icon={Landmark} titre="Jus d'orange — Finance" sousTitre="Trésorerie" />
      <TableVirtus
        colonnes={['Référence', 'Libellé', 'Montant', 'Sens']}
        lignes={tresorerie.map((t) => [
          t.id,
          t.libelle,
          t.montant,
          <Badge tone={t.sens === 'Entrée' ? 'success' : 'danger'}>{t.sens}</Badge>,
        ])}
      />
    </div>
  );
}
