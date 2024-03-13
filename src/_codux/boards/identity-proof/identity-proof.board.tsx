import { createBoard } from '@wixc3/react-board';
import { Identity_Proof } from '../../../components/identity-proof/identity-proof';

export default createBoard({
    name: 'Identity_Proof',
    Board: () => <Identity_Proof />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
