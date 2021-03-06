///****************************************************************************
// * Copyright (c) 2012, the Konoha project authors. All rights reserved.
// * Redistribution and use in source and binary forms, with or without
// * modification, are permitted provided that the following conditions are met:
// *
// *  * Redistributions of source code must retain the above copyright notice,
// *    this list of conditions and the following disclaimer.
// *  * Redistributions in binary form must reproduce the above copyright
// *    notice, this list of conditions and the following disclaimer in the
// *    documentation and/or other materials provided with the distribution.
// *
// * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
// * TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
// * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
// * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
// * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
// * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
// * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// ***************************************************************************/

konoha.new_context = function(_ctx, stacksize /* unused */) {
	_ctx = new konoha.kcontext_t();
	_ctx.kmodsugar = konoha.MODSUGAR_init(_ctx);
	_ctx.KCLASSTABLE_init(_ctx);
	konoha.MODCODE_init(_ctx);
	return _ctx;
}

konoha.konoha_init = function() {
	/* do nothing */
}

konoha.konoha_open = function() {
	konoha.konoha_init();
	return konoha.new_context(null, 0 /* K_PAGESIZE * 8 */);
}

konoha.konoha_load = function(_konoha, script)
{
	var res = konoha.MODSUGAR_loadscript(_konoha, script);
	return res;
}

konoha.konoha_close = function(konoha) {
	/* do nothing */
}
