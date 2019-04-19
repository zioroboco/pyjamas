module Main exposing (Msg(..), main, update, view)

import Browser
import Html exposing (Html, text)
import Html.Attributes exposing (attribute)


main =
    Browser.sandbox { init = 0, update = update, view = view }


type Msg
    = Noop


update msg model =
    case msg of
        Noop ->
            model


view model =
    Html.node "pjs-whiskers" [ attribute "colour" "positive" ] []
