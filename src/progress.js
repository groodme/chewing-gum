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
// Purpose: Progress bar widget creator
//

'use strict'
let ProgressBar = function($) {
    $.chew.progressbar = function(options) {
        let minValue = parseFloat(options.minValue) || 0
        let maxValue = parseFloat(options.maxValue) || 100
        let widget = $("<div>").addClass("progress")
        let bar = $("<div>")
            .addClass("progress-bar")
            .attr('role', 'progressbar')
        widget.append(bar)
        bar.attr('aria-valuemin', minValue)
        bar.attr('aria-valuemax', maxValue)

        if (options.label != undefined) {
            bar.text(options.label)
        }
        if (options.background != undefined) {
            bar.addClass(options.background)
        }
        if (options.striped) {
            bar.addClass('progress-bar-striped')
            if (options.animateStripes) {
                bar.addClass('progress-bar-animated')
            }
        }
        let functionality = {
            progressBar: bar,
            minValue   : minValue,
            maxValue   : maxValue,
            progress   : minValue,
            
            inc: function(value) {
                if (this.progress == this.maxValue) {
                    return this
                }
                this.progress++
                this.progressBar.attr('aria-valuenow', this.progress)
                this.setProgress(this.progress)
                return this
            },

            setProgress: function(value) {
                var newProgress = parseFloat(value)
                this.progress = newProgress
                let percentage = (100.0 * this.progress)/this.maxValue
                this.progressBar.width(percentage + "%")
                return this
            }
        }
        $.extend(widget, functionality)
        return widget
    }
}

export default ProgressBar
