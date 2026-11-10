import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Mail, i as MapPin, n as Phone, o as ArrowUpRight, r as MessageCircle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-0EqyzY-r.js
var import_jsx_runtime = require_jsx_runtime();
var FORM = "https://docs.google.com/forms/d/e/1FAIpQLSfcaAlyx5id8jnOHG4LsNZ6Hg3iLvmt9xPuQ7VwEAve0goJJA/viewform";
var WHATSAPP = "https://wa.me/8801777888446";
var PAGE = "https://www.facebook.com/profile.php?id=61595765411384";
var OWNER = "https://www.facebook.com/mahirul.hasan.334";
var SECONDARY = "https://www.facebook.com/hossain2509013/";
var SPECS = [
	["Capacity", "750 ml"],
	["Material", "Premium aluminium"],
	["Design", "CUET campus illustration"],
	["Clip", "Metal carabiner"],
	["Box", "Premium custom packaging"],
	["Price", "BDT 350"]
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bottle, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Order, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-20 border-b border-sand bg-paper/95 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/mark.jpg",
						alt: "",
						className: "h-8 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-bold tracking-wide",
						children: "MAHIRUL"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-6 text-sm text-muted md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#bottle",
							className: "hover:text-ink",
							children: "CUET bottle"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#range",
							className: "hover:text-ink",
							children: "Custom"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#order",
							className: "hover:text-ink",
							children: "Order"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#faq",
							className: "hover:text-ink",
							children: "FAQ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "hover:text-ink",
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: FORM,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex min-h-11 items-center gap-1 rounded-full bg-burgundy px-4 text-sm font-medium text-paper",
					children: ["Pre-order", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						className: "size-4",
						"aria-hidden": "true"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex w-full min-w-0 max-w-6xl gap-5 overflow-x-auto px-5 pb-3 text-sm text-muted md:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#bottle",
					children: "CUET bottle"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#range",
					children: "Custom"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#order",
					className: "shrink-0",
					children: "Order"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#faq",
					className: "shrink-0",
					children: "FAQ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "shrink-0",
					children: "Contact"
				})
			]
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 pt-10 pb-4 md:pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium tracking-widest text-muted uppercase",
				children: "Chattogram · Made for everyday"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 max-w-full font-display text-4xl leading-none font-extrabold tracking-tight sm:text-6xl lg:text-8xl",
				children: "MAHIRUL"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xl text-2xl leading-snug",
				children: "Custom bottles & keyrings."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-lg leading-relaxed text-muted",
				children: "Useful things, careful design, and a clear way to order. The CUET 750 ml bottle has arrived. Delivery for placed orders starts within the next few days."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: FORM,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-burgundy px-5 text-sm font-medium text-paper",
					children: ["Open the pre-order form", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						className: "size-4",
						"aria-hidden": "true"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: WHATSAPP,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/15 px-5 text-sm font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
						className: "size-4",
						"aria-hidden": "true"
					}), "WhatsApp"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "mt-10 overflow-hidden rounded-2xl bg-sand",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/range.jpg",
					alt: "Stainless, matte black, and glass Mahirul bottles with leather and wood keyrings on a wooden table",
					className: "w-full"
				})
			})
		]
	});
}
function Bottle() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "bottle",
		className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-10 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "md:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl bg-sand",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/cuet-bottle.jpg",
						alt: "White 750 ml CUET aluminium bottle with a carabiner, on a wooden desk",
						className: "mx-auto h-auto max-h-[68vh] w-full object-contain"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 text-sm text-muted",
					children: "Front carries the CUET campus mark. Mahirul mark at the base."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium tracking-widest text-burgundy uppercase",
						children: "Carry your campus pride"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl leading-tight font-bold md:text-5xl",
						children: "CUET premium water bottle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-lg leading-relaxed text-muted",
						children: "A CUET-inspired aluminium bottle for everyday use. Campus illustration on the front, a metal carabiner on the cap, and a custom box."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-sand bg-sand sm:grid-cols-3",
						children: SPECS.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-paper px-4 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm text-muted",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-medium",
								children: value
							})]
						}, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-end justify-between gap-6 rounded-2xl bg-ink px-6 py-6 text-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm tracking-widest text-sand uppercase",
								children: "Per bottle"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 font-display text-6xl leading-none font-extrabold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mr-2 align-top text-2xl font-semibold",
									children: "BDT"
								}), "350"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-sand",
								children: "৳100 advance now · ৳250 remaining later"
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: FORM,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-paper px-5 text-sm font-medium text-ink",
							children: ["Pre-order this bottle", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-4",
								"aria-hidden": "true"
							})]
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-6 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "overflow-hidden rounded-2xl bg-sand",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/cuet-diagram.jpg",
					alt: "Diagram of the CUET bottle showing the plain back, printed front, 750 ml size, and custom box",
					className: "w-full"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "overflow-hidden rounded-2xl bg-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/cuet-arrived.jpg",
					alt: "Two finished CUET bottles standing with their white custom box",
					className: "h-auto max-h-[62vh] w-full object-contain object-center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "px-5 py-4 text-sm text-sand",
					children: "Finished bottles with the custom box. Delivery of placed orders starts within the next few days."
				})]
			})]
		})]
	});
}
function Range() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "range",
		className: "border-t border-sand bg-sand/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium tracking-widest text-muted uppercase",
						children: "Custom work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl leading-tight font-bold md:text-5xl",
						children: "Named bottles and keyrings"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed text-muted",
						children: "Water bottles are in production now. Stainless, matte, and glass bottles, plus keyrings with a name or initials, are made to order. Ask the shop on WhatsApp for a quote — those prices are not listed yet."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-10 grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-paper p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold",
							children: "Bottles"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: "Stainless steel, matte black, and glass with a wood lid. The matte bottle in the cover reads EXPLORE."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-paper p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold",
							children: "Keyrings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: "Leather straps with a name, a wood disc, and a small acrylic tag. Initials such as A.K. and S.R. are already on the samples."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-paper p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold",
							children: "Coming next"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: "More everyday pieces are planned. Updates go on the Mahirul page."
						})]
					})
				]
			})]
		})
	});
}
function Order() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "order",
		className: "bg-ink text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium tracking-widest text-sand uppercase",
							children: "Pre-order"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl leading-tight font-bold md:text-5xl",
							children: "How an order works"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg leading-relaxed text-sand",
							children: "The form is for the CUET bottle. It asks for your full name, student ID, WhatsApp number, payment method, and transaction ID. Use your student ID as the payment reference."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-10 grid gap-4 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-2xl border border-paper/15 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-sm tracking-widest text-sand",
									children: "01"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl font-bold",
									children: "Fill the form"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sand",
									children: "One form per order. Write the details the way they should appear for delivery."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-2xl border border-paper/15 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-sm tracking-widest text-sand",
									children: "02"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl font-bold",
									children: "Pay ৳100"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sand",
									children: "Advance is ৳100 per bottle. Put the transaction ID on the form, and use your student ID as the payment reference."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-2xl border border-paper/15 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-sm tracking-widest text-sand",
									children: "03"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl font-bold",
									children: "Pay ৳250 later"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sand",
									children: "The rest is due afterwards. Placed orders start moving within the next few days."
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: FORM,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-burgundy px-5 text-sm font-medium text-paper",
						children: ["Open pre-order form", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "size-4",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: WHATSAPP,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-paper/20 px-5 text-sm font-medium text-paper",
						children: "Order on WhatsApp"
					})]
				})
			]
		})
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium tracking-widest text-muted uppercase",
				children: "FAQ"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl leading-tight font-bold md:text-5xl",
				children: "Before you pay"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "mt-10 grid gap-4",
			children: FAQ.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-sand px-6 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "font-display text-2xl font-bold",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-3 max-w-3xl leading-relaxed",
					children: item.a
				})]
			}, item.q))
		})]
	});
}
var FAQ = [
	{
		q: "Who can order?",
		a: "The CUET bottle form is for CUET students. It asks for a student ID. Custom bottles and keyrings are separate — message the shop on WhatsApp."
	},
	{
		q: "What does the ৳100 cover?",
		a: "It is the advance on the ৳350 price, not an extra fee. Pay ৳100 for each bottle, put the transaction ID on the form, and use your student ID as the reference."
	},
	{
		q: "When is the remaining ৳250 due?",
		a: "Later. After the pre-order is in, the shop tells you when. That ৳250 is the rest of the ৳350."
	},
	{
		q: "How does delivery work?",
		a: "Orders already placed start going out within the next few days. The shop confirms the details on WhatsApp. No separate delivery charge is listed."
	}
];
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-t border-sand",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium tracking-widest text-muted uppercase",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl leading-tight font-bold",
						children: "Orders go to the shop."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed text-muted",
						children: "Suggestions, and anything that is not an order, go to Hossain."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 flex items-center gap-2 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "size-4 text-burgundy",
							"aria-hidden": "true"
						}), "Chattogram · 4203"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:col-span-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-bold",
					children: "Orders · the shop"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								className: "size-5",
								"aria-hidden": "true"
							}),
							label: "WhatsApp · orders",
							value: "01777-888446",
							href: WHATSAPP
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-5",
								"aria-hidden": "true"
							}),
							label: "Call · orders",
							value: "01836-187243",
							href: "tel:+8801836187243"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "size-5",
								"aria-hidden": "true"
							}),
							label: "Email · orders",
							value: "mahirulh50@gmail.com",
							href: "mailto:mahirulh50@gmail.com"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacebookIcon, {}),
							label: "Official page · orders",
							value: "Mahirul",
							href: PAGE
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacebookIcon, {}),
							label: "Mahirul Hasan · owner",
							value: "Product questions",
							href: OWNER
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-bold",
					children: "Suggestions · Hossain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacebookIcon, {}),
						label: "Hossain · suggestions",
						value: "Feedback and other enquiries",
						href: SECONDARY
					})
				})] })]
			})]
		})
	});
}
function FacebookIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: "size-5",
		"aria-hidden": "true",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.2 8.4V6.9c0-.6.4-.9 1-.9H17V3.5h-1.9C12.4 3.5 11.2 4.7 11.2 6.8v1.6H9.4v2.5h1.8V20h3.2v-9.1h2.1l.3-2.5h-2.6Z" })
	});
}
function ContactRow({ icon, label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: href.startsWith("http") ? "_blank" : void 0,
		rel: href.startsWith("http") ? "noreferrer" : void 0,
		className: "flex min-h-16 items-center gap-4 rounded-2xl bg-sand px-5 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-burgundy",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-sm text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium",
			children: value
		})] })]
	}) });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-sand",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mahirul · Custom bottles & keyrings · Chattogram" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-wrap gap-x-5 gap-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: PAGE,
						target: "_blank",
						rel: "noreferrer",
						className: "underline",
						children: "Shop page"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: OWNER,
						target: "_blank",
						rel: "noreferrer",
						className: "underline",
						children: "Mahirul Hasan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SECONDARY,
						target: "_blank",
						rel: "noreferrer",
						className: "underline",
						children: "Hossain"
					})
				]
			})]
		})
	});
}
//#endregion
export { Home as component };
