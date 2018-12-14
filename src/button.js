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
// Purpose: Button abstractions
//

'use strict'

let Button = function($) {
    if ($.chew.button !== undefined) {
        return
    }
    $.chew.button = function(options) {
        var button = $('<button>').addClass('btn');
        if (options.href) {
            button.click(function(evt){
                window.location = options.href
            });
        }
        if (options.style) {
            button.addClass(options.style)
        }
        if (options.size) {
            button.addClass(options.size)
        }
        if (options.label) {
            button.text(options.label)
        }
        if (options.click) {
            button.click(options.click)
        }
        return button
    }
}

export default Button
