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
// Purpose: Modal dialogs
//

'use strict'

let Dialog = function ($) {
    $.chew.dialog = function (options) {
        let widget = $('<div>').attr('tabindex', -1).attr('role', 'dialog').addClass('modal')
        let dialog = $('<div>').attr('role', 'document').addClass('modal-dialog')
        let content = $('<div>').addClass('modal-content')
        let header = $('<div>').addClass('modal-header')
        let body = $('<div>').addClass('modal-body')
        let footer = $('<div>').addClass('modal-footer')

        widget.append(dialog.append(content))
        if (options.title || options.closeButton) {
            content.append(header)
            if (options.title) {
                let title = $('<h5>').addClass('modal-title').text(options.title)
                header.append(title)
            }
            if (options.closeButton) {
                let closeButton = $('<button>').addClass('close').attr('type', 'button').attr('data-dismiss', 'modal').attr('aria-label', 'close')
                closeButton.append($('<span>').attr('aria-hidden', true).html('&times;'))
                header.append(closeButton)
            }
        }
        if (options.content) {
            content.append(body.append($(options.content)))
        }
        if (options.buttons != undefined) {
            content.append(footer)
            options.buttons.forEach(function (button) {
                footer.append(button)
            })
        }
        let functionality = {
            onshow: options.onshow,
            onclose: options.onclose,
            show: function () {
                var opts = {}
                if (options.autodismiss != undefined && !options.autodismiss) {
                    opts.backdrop = 'static'
                    opts.keyboard = false
                }
                if (this.onshow != undefined) {
                    $(this).on('shown.bs.modal', (e) => {
                        this.onshow(e)
                    })
                }
                $(this).modal(opts)
                if (this.onclose != undefined) {
                    $(this).on('hidden.bs.modal', (e) => {
                        this.onclose(e)
                    })
                }
            },
            hide: function () {
                $(this).modal('hide')
            },
        }
        $.extend(widget, functionality)
        return widget
    }
}

export default Dialog
