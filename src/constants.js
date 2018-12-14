// -*-javascript-*-
//
// MIT License
//
// Copyright (c) 2018 Chiclete Marketing
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
// Purpose: Constants used throughout the project
//

'use strict'

let Constants = function($) {
    $.extend($.chew, {
        BACKGROUND: {
            PRIMARY    : 'bg-primary',
            SECONDARY  : 'bg-secondary',
            SUCCESS    : 'bg-success',
            DANGER     : 'bg-danger',
            WARNING    : 'bg-warning',
            INFO       : 'bg-info',
            LIGHT      : 'bg-light',
            DARK       : 'bg-dark',
            TRANSPARENT: 'bg-transparent'
        },
        BUTTON: {
            STYLE: {
                PRIMARY  : 'btn-primary',
                SECONDARY: 'btn-secondary',
                SUCCESS  : 'btn-success',
                DANGER   : 'btn-danger',
                WARNING  : 'btn-warning',
                INFO     : 'btn-info',
                LIGHT    : 'btn-light',
                DARK     : 'btn-dark',
                LINK     : 'btn-link'
            },
            OUTLINE: {
                PRIMARY  : 'btn-outline-primary',
                SECONDARY: 'btn-outline-secondary',
                SUCCESS  : 'btn-outline-success',
                DANGER   : 'btn-outline-danger',
                WARNING  : 'btn-outline-warning',
                INFO     : 'btn-outline-info',
                LIGHT    : 'btn-outline-light',
                DARK     : 'btn-outline-dark',
            },
            SIZE: {
                SMALL  : 'btn-sm',
                REGULAR: '',
                LARGE  : 'btn-lg',
                BLOCK  : 'btn-block'
            }
        }
    })
}

export default Constants
