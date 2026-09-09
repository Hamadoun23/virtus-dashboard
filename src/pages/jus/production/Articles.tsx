import { Boxes } from 'lucide-react';
import { PageHeader } from '../../../components/ui/PageHeader';
import { TableVirtus } from '../../../components/ui/Table';
import { articlesStock } from '../donnees';

export default function Articles() {
  return (
    <div>
      <PageHeader icon={Boxes} titre="Articles / Stock" sousTitre="Consommables de conditionnement" />
      <TableVirtus
        colonnes={['Article', 'Quantité', 'Unité']}
        lignes={articlesStock.map((a) => [a.article, a.quantite, a.unite])}
      />
    </div>
  );
}
