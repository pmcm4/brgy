import { createBoard } from '@wixc3/react-board';
import { ChooseCert } from '../../../components/choose-cert/choose-cert';

export default createBoard({
    name: 'ChooseCert',
    Board: () => <ChooseCert />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
