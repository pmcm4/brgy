import { createBoard } from '@wixc3/react-board';
import { Identity } from '../../../components/identity/identity';

export default createBoard({
    name: 'Identity',
    Board: () => <Identity />,
    isSnippet: true,
});
