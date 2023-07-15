import { useModel } from '../../../contexts/modelContext';
import NavModel from '../nav/NavModel';
import AuthenticatorModel from './AuthenticatorModel';
import YouTubeModel from './YouTubeModel';

function ModelsHandler() {
    const { model, hideNav, hideAuth, hideBookmarkAuth, hideTrailer } =
        useModel();
    return (
        <>
            {model.nav && <NavModel show={model.nav} hide={hideNav} />}

            {model.auth && (
                <AuthenticatorModel show={model.auth} hide={hideAuth} />
            )}

            {model.bookmarkAuth && (
                <AuthenticatorModel
                    show={model.bookmarkAuth}
                    hide={hideBookmarkAuth}
                    feedback="Please login to add to your watchlist"
                />
            )}

            {model.trailer.show && (
                <YouTubeModel
                    show={model.trailer.show}
                    hide={hideTrailer}
                    url={model.trailer.url}
                />
            )}
        </>
    );
}

export default ModelsHandler;
