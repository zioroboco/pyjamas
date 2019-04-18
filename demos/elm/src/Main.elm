module Main exposing (Msg(..), main, update, view)

import Browser
import Html exposing (Html, button, div, text)
import Html.Attributes exposing (attribute)
import Html.Events exposing (onClick)
import Json.Encode exposing (encode, object, string)


main =
    Browser.sandbox { init = 0, update = update, view = view }


type Msg
    = Increment
    | Decrement


update msg model =
    case msg of
        Increment ->
            model + 1

        Decrement ->
            model - 1


view model =
    let
        props colour =
            attribute "data-props" <|
                encode 0 <|
                    object
                        [ ( "colour", string colour ) ]
    in
    div []
        [ Html.node "x-example"
            [ onClick Decrement, props "negative" ]
            [ text "-" ]
        , div []
            [ text (String.fromInt model) ]
        , Html.node "x-example"
            [ onClick Increment, props "positive" ]
            [ text "+" ]
        ]
