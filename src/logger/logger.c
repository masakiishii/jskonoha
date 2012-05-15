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
//
///* ************************************************************************ */
//
//#include<konoha2/konoha2.h>
//#include<konoha2/logger.h>
//
///* ------------------------------------------------------------------------ */
///* [logger] */
//
//typedef struct  {
//	kmodlocal_t h;
//	karray_t logbuf;
//
//} ctxlogger_t;
//
//typedef struct  {
//	kmodshare_t h;
//} kmodlogger_t;
//
//#define kmodlogger  ((kmodlogger_t*)_ctx->modshare[MOD_logger])
//#define ctxlogger    ((ctxlogger_t*)_ctx->modlocal[MOD_logger])
//
//static char *write_byte_toebuf(const char *text, size_t len, char *p, char *ebuf)
//{
//	if(ebuf - p > len) {
//		memcpy(p, text, len);
//		return p+len;
//	}
//	return p;
//}
//
//static char *write_text_toebuf(const char *s, char *p, char *ebuf)
//{
//	if(p < ebuf) { p[0] = '"'; p++; }
//	while(*s != 0 && p < ebuf) {
//		if(*s == '"') {
//			p[0] = '\"'; p++;
//			if(p < ebuf) {p[0] = s[0]; p++;}
//		}
//		else if(*s == '\n') {
//			p[0] = '\\'; p++;
//			if(p < ebuf) {p[0] = 'n'; p++;}
//		}
//		else {
//			p[0] = s[0]; p++;
//		}
//		s++;
//	}
//	if(p < ebuf) { p[0] = '"'; p++; }
//	return p;
//}
//
//static void reverse(char *const start, char *const end, const int len)
//{
//	int i, l = len / 2;
//	register char *s = start;
//	register char *e = end - 1;
//	for (i = 0; i < l; i++) {
//		char tmp = *s;
//		*s++ = *e;
//		*e-- = tmp;
//	}
//}
//
//static char *write_uint_toebuf(uintptr_t uvalue, char *const p, const char *const end)
//{
//	int i = 0;
//	while (p + i < end) {
//		int tmp = uvalue % 10;
//		uvalue /= 10;
//		p[i] = '0' + tmp;
//		++i;
//		if (uvalue == 0)
//			break;
//	}
//	reverse(p, p + i, i);
//	return p + i;
//}
//
//#define EBUFSIZ 1024
//
//static uintptr_t Ktrace_p(CTX, klogconf_t *logconf, va_list ap)
//{
//	char buf[EBUFSIZ], *p = buf, *ebuf =  p + (EBUFSIZ - 4);
//	p[0] = '{'; p++;
//	{
//		int c = 0, logtype;
//		while((logtype = va_arg(ap, int)) != LOG_END) {
//			const char *key = va_arg(ap, const char*);
//			if(c > 0 && p + 3 < ebuf) { p[0] = ','; p[1] = ' '; p+=2; }
//			if(p < ebuf) { p[0] = '"'; p++; }
//			p = write_byte_toebuf(key, strlen(key), p, ebuf);
//			if(p + 3 < ebuf) { p[0] = '"'; p[1] = ':'; p[2] = ' '; p+=3; }
//			switch(logtype) {
//			case LOG_s: {
//				const char *text = va_arg(ap, const char*);
//				p = write_text_toebuf(text, p, ebuf);
//				break;
//			}
//			case LOG_u: {
//				p = write_uint_toebuf(va_arg(ap, uintptr_t), p, ebuf);
//				break;
//			}
//			default:
//				if(p + 4 < ebuf) { p[0] = 'n'; p[1] = 'u'; p[2] = 'l'; p[3] = 'l'; p+=4; }
//			}
//			c++;
//		}
//	}
//	p[0] = '}'; p++;
//	p[0] = '\0';
//	fprintf(stderr, "konoha: %s\n", buf);
//	return 0;// FIXME reference to log
//}
//
//static uintptr_t Ktrace(CTX, klogconf_t *logconf, ...)
//{
//	if(TFLAG_is(int, logconf->policy, LOGPOL_INIT)) {
//		TFLAG_set(int,logconf->policy,LOGPOL_INIT,0);
//		// reconfigure logconf here;
//	}
//	va_list ap;
//	va_start(ap, logconf);
//	uintptr_t ref = Ktrace_p(_ctx, logconf, ap);
//	va_end(ap);
//	return ref;
//}
//
//static void ctxlogger_reftrace(CTX, struct kmodlocal_t *baseh)
//{
////	ctxlogger_t *base = (ctxlogger_t*)baseh;
//}
//static void ctxlogger_free(CTX, struct kmodlocal_t *baseh)
//{
//	ctxlogger_t *base = (ctxlogger_t*)baseh;
//	KFREE(base, sizeof(ctxlogger_t));
//}
//
//static void kmodlogger_setup(CTX, struct kmodshare_t *def, int newctx)
//{
//	if(newctx) {
//		ctxlogger_t *base = (ctxlogger_t*)KCALLOC(sizeof(ctxlogger_t), 1);
//		base->h.reftrace = ctxlogger_reftrace;
//		base->h.free     = ctxlogger_free;
//		_ctx->modlocal[MOD_logger] = (kmodlocal_t*)base;
//	}
//}
//
//static void kmodlogger_reftrace(CTX, struct kmodshare_t *baseh)
//{
//
//}
//
//static void kmodlogger_free(CTX, struct kmodshare_t *baseh)
//{
//	free(baseh/*, sizeof(kmodshare_t)*/);
//}
//
//void MODLOGGER_init(CTX, kcontext_t *ctx)
//{
//	kmodlogger_t *base = (kmodlogger_t*)calloc(sizeof(kmodlogger_t), 1);
//	base->h.name     = "verbose";
//	base->h.setup    = kmodlogger_setup;
//	base->h.reftrace = kmodlogger_reftrace;
//	base->h.free     = kmodlogger_free;
//	Konoha_setModule(MOD_logger, (kmodshare_t*)base, 0);
//	KSET_KLIB(trace, 0);
//}
//
